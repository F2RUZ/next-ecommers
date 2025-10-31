// entities/ui/Error.tsx
"use client";

import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// interface ErrorProps {
//   message?: string;
//   onRetry?: () => void;
// }

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          bgcolor: "#1e1e1e",
          color: "#fff",
          p: { xs: 2, sm: 4 },
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 60, color: "#ff5252", mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 2 }}>
          {message}
        </Typography>
        {onRetry ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={onRetry}
            fullWidth
          >
            Retry
          </Button>
        ) : (
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            Please try again later
          </Typography>
        )}
        {/* JSON ko‘rinish */}
        <Box
          component="pre"
          sx={{
            mt: 2,
            p: 1,
            bgcolor: "#2c2c2c",
            borderRadius: 1,
            overflowX: "auto",
            textAlign: "left",
            fontSize: 12,
          }}
        >
          {JSON.stringify({ error: message }, null, 2)}
        </Box>
      </Paper>
    </Box>
  );
};

export default Error;
