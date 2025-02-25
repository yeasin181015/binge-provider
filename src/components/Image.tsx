import React from "react";
import Box from "@mui/material/Box";
import { LOCAL_BASE_URL } from "./SlickSlider";

function Image({
  path,
  sx,
  onClick,
}: {
  path: string;
  sx?: any;
  onClick?: () => void;
}) {
  const onMediaFallback = (event: { target: any }) => {
    const { target } = event;
    target.src = "https://pre.binge.buzz/assets/svg/binge-logo.svg";
  };

  return (
    <Box
      sx={{ ...sx }}
      component="img"
      onClick={() => onClick?.()}
      src={
        path
          ? `${LOCAL_BASE_URL}/${path}`
          : "https://pre.binge.buzz/assets/svg/binge-logo.svg"
      }
      onError={onMediaFallback}
    />
  );
}

export default Image;
