export const fetchImages = async (token: string) => {
    const response = await fetch(
      "https://web-api-staging.binge.buzz/api/v3/banner/vod-home",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Device-Type": "websdk",
        },
      }
    );

    const imageResponse = await response.json();
    return imageResponse
  };