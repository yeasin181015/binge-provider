import Image from "./Image";
import { Box } from "@mui/material";
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
}

export default function SlickSlider({ data }: SlickSliderProps) {
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
          display: "block !important",
          cursor: "pointer",
          position: "absolute",
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
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "block !important",
          cursor: "pointer",
          position: "absolute",
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
        window.location.assign("https://www.binge.buzz");
      }}
    />
  );

  return (
    <Box sx={{ overflowX: "hidden", position: "relative" }}>
      {data.length > 0 && (
        <>
          <SamplePrevArrow onClick={() => sliderRef?.current?.slickPrev()} />
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    px: 1,
                  }}
                >
                  {index !== activeSlideIndex ? (
                    ImageSlide(item)
                  ) : item.trailer_link ? (
                    <VideoJSPlayer
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
          <SampleNextArrow onClick={() => sliderRef?.current?.slickNext()} />
        </>
      )}
    </Box>
  );
}
