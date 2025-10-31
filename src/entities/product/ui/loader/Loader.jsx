// entities/ui/Loader.tsx
"use client";

import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@mui/system";

// Pulsing animation
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const Loader = ({ message = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        color: "#fff",
        gap: 2,
        px: 2,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "6px solid #9c27b0",
          borderTop: "6px solid #7b1fa2",
          animation: "spin 1.2s linear infinite",
          mb: 2,
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: 500,
          color: "#9c27b0",
          animation: `${pulse} 1.5s ease-in-out infinite`,
        }}
      >
        {message}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#aaa", textAlign: "center", mt: 1 }}
      >
        Please wait a moment...
      </Typography>
    </Box>
  );
};

export default Loader;
