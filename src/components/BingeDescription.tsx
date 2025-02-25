"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

const BingeDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const typewriterRef = useRef<any>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
      typewriterRef.current.deleteAll();
      typewriterRef.current.typeString(description || "").start();
    }
  }, [description]);
  return (
    <Box
      sx={{
        width: {
          xs: "95%",
          sm: "80%",
          md: "65%",
          lg: "50%",
        },
        mx: "auto !important",
        display: "flex",
        flexDirection: "column",
        gap: "21px",
        mt: "43px !important",
      }}
    >
      <Typography
        className="banner-text"
        sx={{
          color: "#202939",
          fontSize: {
            xs: "30px",
            sm: "36px",
          },
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Box
        className="binge-text"
        sx={{
          color: "#697586",
          fontSize: {
            xs: "14px",
            sm: "16px",
          },
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        {/* <Typewriter
          onInit={(typewriter) => {
            typewriterRef.current = typewriter;
            typewriter.typeString(description || "").start();
          }}
          options={{
            delay: 40,
          }}
        /> */}
        <Typography>{description || ""}</Typography>
      </Box>
    </Box>
  );
};

export default BingeDescription;
