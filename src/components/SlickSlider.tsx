"use client";

import React, { useState, useRef } from "react";
import Image from "./Image";
import styled from "styled-components";
import { Box, Skeleton } from "@mui/material";
import Slider, { Settings } from "react-slick";
import VideoPlayer from "./VideoPlayerComponents/VideoPlayer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const LOCAL_BASE_URL = "https://web-api-staging.binge.buzz";

interface SlickSliderProps {
  data: any[];
  isLoading: boolean;
}

const Houdini = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  padding: var(--border-size);

  --border-size: 0.1rem;
  --border-opacity: 0; /* Initially invisible */

  border: var(--border-size) solid transparent;
  background: rgb(255 255 255 / var(--opacity)) padding-box; /* Only inner content visible initially */
  background-clip: padding-box, border-box;

  &:hover {
    --border-opacity: 1; /* Show border on hover */

    background: conic-gradient(
          from var(--angle),
          transparent 25%,
          rgba(254, 32, 32) 50%,
          rgba(219, 0, 0) 75%,
          transparent 100%
        )
        border-box,
      rgb(255 255 255 / var(--opacity)) padding-box;

    animation: rotate 4s linear infinite, opacityChange 3s infinite alternate;
  }

  @property --opacity {
    syntax: "<number>";
    initial-value: 0.5;
    inherits: false;
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes opacityChange {
    to {
      --opacity: 1;
    }
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px; /* Ensures inner content is also rounded */
  overflow: hidden; /* Ensures content doesn't overflow the border */
`;

export default function SlickSlider({ data, isLoading }: SlickSliderProps) {
  const sliderRef = useRef<Slider>(null);
  const [mute, setVolumeStatus] = useState<boolean>(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [videoProgress, setVideoProgress] = useState<{ [key: string]: number }>(
    {}
  );

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
          display: "flex !important",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
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
          display: "flex !important",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
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

  const handleTimeUpdate = (videoId: string, currentTime: number) => {
    setVideoProgress((prev) => ({ ...prev, [videoId]: currentTime }));
  };

  const handleVideoClick = (item: any) => {
    if (typeof window !== "undefined") {
      window.location.assign(`https://binge.buzz/playing-vod/${item.id}`);
    }
  };

  return (
    <Box sx={{ overflowX: "hidden", position: "relative" }}>
      {data.length > 0 && (
        <>
          {!isLoading && (
            <SamplePrevArrow onClick={() => sliderRef?.current?.slickPrev()} />
          )}
          <Slider ref={sliderRef} {...settings}>
            {data?.map((item, index) => {
              return (
                <Houdini key={index}>
                  <InnerContainer
                    onMouseEnter={() => {
                      if (activeSlideIndex === index) return;
                      if (timerRef.current) clearTimeout(timerRef.current);
                      setHoveredIndex(index);

                      if (hoveredIndex !== index) {
                        setActiveSlideIndex(index);
                      }
                    }}
                  >
                    {isLoading ? (
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={250}
                        sx={{
                          bgcolor: "#F9F9FB",
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
                    ) : (
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "16/9",
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        {/* Image Component */}
                        <Box
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transition: "opacity 0.8s ease-in-out",
                            opacity: index === activeSlideIndex ? 0 : 1,
                            zIndex: index === activeSlideIndex ? 0 : 1,
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Image
                            path={
                              item.image_landscape ||
                              item.image_portrait ||
                              item.image_square ||
                              item.thumb_path
                            }
                            sx={{
                              borderRadius: "16px",
                              width: "100%",
                              aspectRatio: "16/9",
                              objectFit: "contain",
                              cursor: "pointer",
                            }}
                            onClick={() => handleVideoClick(item)}
                          />
                        </Box>

                        {/* VideoJSPlayer Component */}
                        <Box
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transition: "opacity 0.8s ease-in-out",
                            opacity: index === activeSlideIndex ? 1 : 0,
                            zIndex: index === activeSlideIndex ? 1 : 0,
                          }}
                        >
                          <VideoPlayer
                            videoId={item.id}
                            //@ts-ignore
                            _hlsStreamUrl={item.trailer_link}
                            isActive={index === activeSlideIndex}
                            path={
                              item.image_landscape ||
                              item.image_portrait ||
                              item.image_square ||
                              item.thumb_path
                            }
                            redirectPath={`https://binge.buzz/playing-vod/${item.id}`}
                            initialTime={videoProgress[item.id] || 0}
                            onTimeUpdate={(time: any) =>
                              handleTimeUpdate(item.id, time)
                            }
                          />
                        </Box>
                      </Box>
                    )}
                  </InnerContainer>
                </Houdini>
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
