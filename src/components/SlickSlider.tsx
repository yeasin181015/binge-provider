import Image from "./Image";
import { Box, LinearProgress, Skeleton } from "@mui/material";
import VideoJSPlayer from "./VideoJSPlayer";
import Slider, { Settings } from "react-slick";
import React, { useState, useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";
import VideoJSPlayer2 from "./VideoJSPlayer2";
import Player from "video.js/dist/types/player";

export const LOCAL_BASE_URL = "https://web-api-staging.binge.buzz";

interface SlickSliderProps {
  data: any[];
  isLoading: boolean;
}

const Houdini = styled.div`
  width: 100%;
  overflow: hidden;
  display: "flex";
  justify-content: center;
  border-radius: 16px;

  --border-size: 0.3rem;
  border: var(--border-size) solid transparent;

  &:hover {
    border-image: conic-gradient(
        from var(--angle),
        transparent 25%,
        rgba(0, 0, 255, 0.5) 50%,
        rgba(0, 0, 255, 0.9) 75%,
        transparent 100%
      )
      1 stretch;
    background: var(--gradient-border) border-box,
      /* Gradient border */ rgb(255 255 255 / var(--opacity)) padding-box; /* Inner content with opacity */

    @supports (background: paint(houdini)) {
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

      & /*.rainbow*/ {
        animation: rotate 4s linear infinite,
          opacityChange 3s infinite alternate;
      }

      /* Hide the warning */
      .warning {
        display: none;
      }
    }
  }
`;

export default function SlickSlider({ data, isLoading }: SlickSliderProps) {
  const sliderRef = useRef<Slider>(null);
  const [mute, setVolumeStatus] = useState<boolean>(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

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

  const ImageSlide = (item: any, index: number) => (
    <Box sx={{ position: "relative" }}>
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
        // pathRedirect={`https://binge.buzz/playing-vod/${item.id}`}
        // onClick={() => {
        //   window.location.assign(`https://binge.buzz/playing-vod/${item.id}`);
        // }}
      />
    </Box>
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
                <Houdini
                  key={index}
                  // onMouseEnter={() => {
                  //   if (timerRef.current) clearTimeout(timerRef.current);
                  //   setHoveredIndex(index);

                  //   if (hoveredIndex !== index) {
                  //     timerRef.current = setTimeout(() => {
                  //       setActiveSlideIndex(index);
                  //     }, 2000);
                  //   }
                  // }}
                  // onMouseLeave={() => {
                  //   if (timerRef.current) clearTimeout(timerRef.current);
                  //   setHoveredIndex(null);
                  // }}
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
                  ) : index !== activeSlideIndex ? (
                    ImageSlide(item, index)
                  ) : item.trailer_link ? (
                    <VideoJSPlayer
                      videoId={item.id}
                      //@ts-ignore
                      _hlsStreamUrl={item.trailer_link}
                      isActive={index === activeSlideIndex}
                      redirectPath={`https://binge.buzz/playing-vod/${item.id}`}
                    />
                  ) : (
                    // <VideoJSPlayer2
                    //   //@ts-ignore
                    //   playerRef={playerRef}
                    //   videoId={item.id}
                    //   _hlsStreamUrl={item.trailer_link}
                    //   muted={true}
                    //   isActive={index === activeSlideIndex}
                    // />
                    ImageSlide(item, index)
                  )}
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
