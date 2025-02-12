import React from "react";
import BingeSlider from "./BingleSlider";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import palette from "../theme/palette";
import Banner from "./Banner";

const BingeLandingPage = () => {
  return (
    <ThemeProvider theme={createTheme({ palette })}>
      <Box>
        <Banner />
        {/* <BingeSlider /> */}
      </Box>
    </ThemeProvider>
  );
};

export default BingeLandingPage;
