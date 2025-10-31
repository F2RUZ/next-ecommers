"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useToggleLikeMutation, // yangi hook
} from "@/entities/product/api/productApi";
import Loader from "../../../entities/product/ui/loader/Loader";
import Error from "../../../entities/product/ui/error/Error";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProductDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useGetProductByIdQuery(
    Number(id)
  );
  const [deleteProduct] = useDeleteProductMutation();
  const [toggleLike] = useToggleLikeMutation(); // toggleLike mutation

  if (isLoading) return <Loader message="Loading product details..." />;
  if (error)
    return <Error message="Failed to load product" onRetry={refetch} />;

  const handleDelete = async () => {
    await deleteProduct(Number(id));
    router.push("/products");
  };

  const handleToggleLike = async () => {
    if (!data) return;
    await toggleLike({ id: data.id, liked: !data.liked });
    refetch()
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5, px: 1 }}>
      <Card
        sx={{
          width: { xs: "100%", sm: 500 },
          bgcolor: "#1e1e1e",
          color: "#fff",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => router.push("/products")}
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            color: "#fff",
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 1,
            bgcolor: "rgba(0,0,0,0.3)",
            borderRadius: "6px",
            p: 0.5,
          }}
        >
          <IconButton
            onClick={handleToggleLike}
            sx={{
              color: data?.liked ? "#ff4081" : "#fff",
              "&:hover": {
                color: data?.liked ? "#ff79a1" : "#ff4081",
                transform: "scale(1.3)",
              },
              transition: "0.2s",
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            onClick={handleDelete}
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#ff5252",
                transform: "rotate(-15deg) scale(1.2)",
              },
              transition: "0.2s",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        <CardMedia
          component="img"
          image={data?.image}
          alt={data?.title}
          sx={{ height: 300, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {data?.title.toUpperCase()}
          </Typography>
          <Typography variant="body1">{data?.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetailPage;
