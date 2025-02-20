export const fetchCategories = async (token: string) => {
  const responseAllCategories = await fetch(
    "https://web-api-staging.binge.buzz/api/v3/page/allCategories",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Device-Type": "websdk",
      },
      body: JSON.stringify({
        page: "corporate-sdk-home",
      }),
    }
  );

  const resAllCatData = await responseAllCategories.json();
  return resAllCatData.categories;
};
