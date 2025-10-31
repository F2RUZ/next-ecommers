"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { Product } from "../model/productSlice";
import Link from "next/link";
import {
  useToggleLikeMutation,
  useDeleteProductMutation,
} from "@/entities/product/api/productApi";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [toggleLike] = useToggleLikeMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleToggleLike = async () => {
    try {
      // mutationni chaqiramiz va unwrap() bilan xatolarni catch qilamiz
      await toggleLike({ id: product.id, liked: !product.liked }).unwrap();
    } catch (err) {
      console.error("Failed to toggle like:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id).unwrap();
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  return (
    <Card
      sx={{
        width: { xs: "300px", sm: "230px", md: "260px" },
        maxWidth: 280,
        height: 350,
        m: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bgcolor: "#1e1e1e",
        color: "#fff",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ height: 180, objectFit: "cover" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom noWrap>
          {product.title.toUpperCase()}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>

      {/* Like/Delete tugmalari */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          display: "flex",
          gap: 1,
          bgcolor: "rgba(0,0,0,0.3)",
          borderRadius: "5px",
          p: 0.5,
        }}
      >
        <IconButton
          onClick={handleToggleLike}
          sx={{
            color: product.liked ? "#ff4081" : "#fff",
            transition: "transform 0.2s, color 0.2s",
            "&:hover": {
              color: product.liked ? "#ff79a1" : "#ff4081",
              transform: "scale(1.3)",
            },
          }}
        >
          <FavoriteIcon />
        </IconButton>

        <IconButton
          onClick={handleDelete}
          sx={{
            color: "#fff",
            transition: "transform 0.2s, color 0.2s",
            "&:hover": {
              color: "#ff5252",
              transform: "rotate(-15deg) scale(1.2)",
            },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>

      <Box sx={{ p: 1, textAlign: "center" }}>
        <Button
          component={Link}
          href={`/products/${product.id}`}
          variant="outlined"
          sx={{
            bgcolor: "#9c27b0",
            color: "#fff",
            textTransform: "none",
            width: "90%",
            "&:hover": { bgcolor: "#7b1fa2" },
          }}
        >
         More Info
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
