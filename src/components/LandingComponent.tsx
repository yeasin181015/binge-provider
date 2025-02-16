import Banner from "./Banner";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import BingeSlider from "./BingleSlider";
import { fetchImages } from "../apis/fetchImages";
import BingeDescription from "./BingeDescription";
import React, { useEffect, useState } from "react";
import { handleAnonLogin } from "../utils/handleAnnonLogin";

const fetchToken = async () => {
  const token = await handleAnonLogin();
  return token;
};


const LandingComponent = () => {
  const { data: token, error, isLoading: tokenLoading } = useQuery(["token"], fetchToken,  {
    refetchOnWindowFocus: false,  // Prevent refetching on tab switch
    refetchOnMount: false,        // Prevent refetching on mount
    refetchOnReconnect: false,    // Prevent refetching when the network reconnects
    staleTime: Infinity,  // Prevents automatic invalidation
    cacheTime: Infinity,  // Prevents garbage collection
  });

  const [bannerImages, setBannerImages] = useState({
    landscape: "",
    portrait: "",
  });
  const [bingeDesc, setBingeDesc] = useState({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetchImages(token).then((res) => {
        const { banners } = res;
        setBannerImages({
          landscape: `https://web-api-staging.binge.buzz/${banners[0].banner_landscape_image_path}`,
          portrait: `https://web-api-staging.binge.buzz/${banners[0].banner_portrait_image_path}`,
        });
        setBingeDesc({
          title: banners[0]["section-title"],
          description: banners[0]["section-description"],
        });
        setIsLoading(false);
      });
    }
  }, [token]);
  return (
    <>
      <Banner isLoading={isLoading} bannerImages={bannerImages} />
      <BingeDescription
        title={bingeDesc.title}
        description={bingeDesc.description}
      />
      <BingeSlider />
    </>
  );
};

export default LandingComponent;
