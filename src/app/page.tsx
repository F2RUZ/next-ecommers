"use client";

import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Section */}
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: { xs: 6, sm: 12 },
        }}
      >
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={24}
          priority
        />

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            mt: 4,
            mb: 2,
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          Welcome to Products App
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: 600,
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          Manage, explore, and create amazing products with ease. This SPA is
          built using Next.js, TypeScript, MUI, and Redux Toolkit (RTK Query).
        </Typography>

        {/* Call-to-Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Button
            component={Link}
            href="/products"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 3,
              px: 4,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            View Products
          </Button>

          <Button
            component={Link}
            href="/create-product"
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              borderRadius: 3,
              px: 4,
              textTransform: "none",
              fontWeight: "bold",
              borderColor: "secondary.main",
              color: "secondary.main",
              "&:hover": {
                backgroundColor: "rgba(187, 134, 252, 0.1)",
                borderColor: "secondary.main",
              },
            }}
          >
            Create Product
          </Button>
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: "center",
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          color: "text.secondary",
        }}
      >
        © {new Date().getFullYear()} Products App — Built with Next.js & MUI
      </Box>
    </Box>
  );
}
