import React from "react";
import palette from "../theme/palette";
import LandingComponent from "./LandingComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const queryClient = new QueryClient();

const BingeLandingPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createTheme({ palette })}>
        <LandingComponent />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default BingeLandingPage;
