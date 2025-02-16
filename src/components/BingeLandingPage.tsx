import React from "react";
import palette from "../theme/palette";
import LandingComponent from "./LandingComponent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const BingeLandingPage = () => {
  return (
    <ThemeProvider theme={createTheme({ palette })}>
      <LandingComponent />
    </ThemeProvider>
  );
};

export default BingeLandingPage;
