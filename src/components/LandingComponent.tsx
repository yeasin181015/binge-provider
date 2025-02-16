import Banner from "./Banner";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import BingeSlider from "./BingleSlider";
import { fetchImages } from "../apis/fetchImages";
import BingeDescription from "./BingeDescription";
import React, { useEffect, useState } from "react";
import { handleAnonLogin } from "../utils/handleAnnonLogin";
import { GetCookiesValue } from "../utils/cookie";
// import { apiSettings } from "../config/apiSettings";

const fetchToken = async () => {
  const token = await handleAnonLogin();
  return token;
};

const LandingComponent = () => {
  const { data: token, refetch: refetchToken } = useQuery(
    ["token"],
    fetchToken
  );

  const { data: imagesData, isLoading } = useQuery(
    ["images"],
    () => fetchImages(token!),
    {
      enabled: !!token,
    }
  );

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
      <BingeSlider token={token} />
    </>
  );
};

export default LandingComponent;
