
import { User, AuthError } from "firebase/auth";
import { firebaseAnonymousSignIn } from "../config/firebaseConfig";
import { GetCookiesValue, SetCookiesValue } from "./cookie";

export const handleAnonLogin = async () => {
  console.log("token in cookie", GetCookiesValue("annonJwtToken", false));
  if (GetCookiesValue("annonJwtToken", false))
    return GetCookiesValue("annonJwtToken", false);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout"), 5000)
  );
  const apiPromise = firebaseAnonymousSignIn();

  try {
    const res: User | AuthError | any = await Promise.race([
      apiPromise,
      timeoutPromise,
    ]);

    if (res === "Timeout") {
      console.error("API call timed out");
      window.location.href = "/login";
      return null;
    }

    const response = await fetch(
      "https://web-api-staging.binge.buzz/api/v3/oauth/verify/login/anon",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Device-Type": "websdk",
        },
        body: JSON.stringify({
          access_token: res.accessToken,
          uid: res.uid,
        }),
      }
    );

    const responseData = await response.json();

    if (responseData?.token) {
      SetCookiesValue("annonJwtToken", responseData.token, 1, false);
      sessionStorage.setItem("annonJwtToken", responseData.token);
      return responseData.token;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error during anonymous login:", err);
    return null;
  }
};
