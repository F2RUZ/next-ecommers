"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Modal,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Create Product", href: "/create-product" },
  { label: "Favorites", href: "/favorites" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#000000ff", color: "#fff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={2}>
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={handleOpen}>
                <MenuIcon />
              </IconButton>
            )}
            <Link href={"/"}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                PRODUCT APP
              </Typography>
            </Link>
          </Box>

          {!isMobile && (
            <Box display="flex" alignItems="center" gap={2}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  color="inherit"
                  component={Link}
                  href={link.href}
                  sx={{ textTransform: "uppercase" }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Modal for Mobile Menu */}
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "80%",
            height: "100%",
            bgcolor: "#121212",
            color: "#fff",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
            sx={{ alignSelf: "flex-end", textTransform: "uppercase" }}
          >
            Close
          </Button>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={handleClose}
                >
                  <ListItemText
                    primary={link.label.toUpperCase()}
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
