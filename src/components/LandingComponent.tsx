"use client";

import Banner from "./Banner";
import BingeSlider from "./BingleSlider";
import { fetchImages } from "../apis/fetchImages";
import BingeDescription from "./BingeDescription";
import React, { useEffect, useState } from "react";
import { handleAnonLogin } from "../utils/handleAnnonLogin";

const LandingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [imagesData, setImagesData] = useState<any>(null);

  useEffect(() => {
    const getTokenAndFetchImages = async () => {
      try {
        const fetchedToken = await handleAnonLogin();
        setToken(fetchedToken);

        const imagesResponse = await fetchImages(fetchedToken);
        setImagesData(imagesResponse);
      } catch (error) {
        console.error("Error fetching token or images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getTokenAndFetchImages();
  }, []);

  const bannerImages = {
    landscape: imagesData
      ? `https://web-api-staging.binge.buzz/${imagesData.banners[0].banner_landscape_image_path}`
      : "",
    portrait: imagesData
      ? `https://web-api-staging.binge.buzz/${imagesData.banners[0].banner_portrait_image_path}`
      : "",
  };

  const bingeDesc = {
    title: imagesData?.banners[0]["section-title"] || "",
    description: imagesData?.banners[0]["section-description"] || "",
  };

  return (
    <>
      <Banner isLoading={isLoading} bannerImages={bannerImages} />
      <BingeDescription
        title={bingeDesc.title}
        description={bingeDesc.description}
      />
      <BingeSlider token={token} isLoading={isLoading} />
    </>
  );
};

export default LandingComponent;
