import Image from "./Image";
import { Box, Skeleton } from "@mui/material";
import VideoJSPlayer from "./VideoJSPlayer";
import { useMediaQuery } from "@mui/material";
import Slider, { Settings } from "react-slick";
import { CategoryProps } from "./BingleSlider";
import React, { useState, useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const LOCAL_BASE_URL = "https://web-api-staging.binge.buzz";

interface SlickSliderProps {
  data: any[];
  isLoading: boolean;
}

export default function SlickSlider({ data, isLoading }: SlickSliderProps) {
  const sliderRef = useRef<Slider>(null);
  const [mute, setVolumeStatus] = useState<boolean>(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        onClick={onClick}
        sx={{
          ...style,
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          display: "flex !important", // Use flex to center the content
          position: "absolute",
          backgroundColor: "white", // White background for circle
          borderRadius: "50%", // To make it a circle
          width: "40px", // Width of the circle
          height: "40px", // Height of the circle
          justifyContent: "center", // Center the icon inside the circle
          alignItems: "center", // Center the icon vertically
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 20, color: "black" }} />
      </Box>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        onClick={onClick}
        sx={{
          ...style,
          top: "50%",
          left: 0,
          display: "flex !important", // Use flex to center the content
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          position: "absolute",
          backgroundColor: "white", // White background for circle
          borderRadius: "50%", // To make it a circle
          width: "40px", // Width of the circle
          height: "40px", // Height of the circle
          justifyContent: "center", // Center the icon inside the circle
          alignItems: "center", // Center the icon vertically
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: 20, color: "black" }} />
      </Box>
    );
  }

  const settings: Settings = {
    speed: 500,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveSlideIndex(newIndex),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ImageSlide = (item: any) => (
    <Image
      path={
        item.image_landscape ||
        item.image_portrait ||
        item.image_square ||
        item.thumb_path
      }
      sx={{
        aspectRatio: "16/9",
        width: "100%",
        cursor: "pointer",
        borderRadius: 2,
      }}
      onClick={() => {
        window.location.assign(`https://binge.buzz/playing-vod/${item.id}`);
      }}
    />
  );

  return (
    <Box sx={{ overflowX: "hidden", position: "relative" }}>
      {data.length > 0 && (
        <>
          {!isLoading && (
            <SamplePrevArrow onClick={() => sliderRef?.current?.slickPrev()} />
          )}
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    px: 1,
                  }}
                >
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={250} // Adjust height to fit your design
                      sx={{
                        bgcolor: "#F9F9FB", // Base background
                        background:
                          "linear-gradient(90deg, #F9F9FB 25%, #f2e8f2 50%, #F9F9FB 75%)",
                        backgroundSize: "300% 100%",
                        animation: "waveAnimation 2.8s ease-in-out infinite",
                        "@keyframes waveAnimation": {
                          "0%": { backgroundPosition: "100% 0" },
                          "100%": { backgroundPosition: "-100% 0" },
                        },
                        borderRadius: 2,
                      }}
                    />
                  ) : index !== activeSlideIndex ? (
                    ImageSlide(item)
                  ) : item.trailer_link ? (
                    <VideoJSPlayer
                      videoId={item.id}
                      //@ts-ignore
                      _hlsStreamUrl={item.trailer_link}
                      isActive={index === activeSlideIndex}
                    />
                  ) : (
                    ImageSlide(item)
                  )}
                </Box>
              );
            })}
          </Slider>
          {!isLoading && (
            <SampleNextArrow onClick={() => sliderRef?.current?.slickNext()} />
          )}
        </>
      )}
    </Box>
  );
}
