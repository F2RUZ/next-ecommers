"use client";

import React from "react";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Navbar from "@/widgets/Navbar/ui/Navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#bb86fc",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};
