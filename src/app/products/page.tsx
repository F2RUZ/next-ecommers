"use client";

import React, { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "@/entities/product/api/productApi";
import ProductList from "@/entities/product/ui/ProductList";
import { Container, Typography, Box, Button } from "@mui/material";
import { useAppDispatch } from "@/appStore/hooks";
import { toggleLike } from "@/entities/product/model/productSlice";
import Loader from "@/entities/product/ui/loader/Loader";
import Error from "@/entities/product/ui/error/Error";

const PAGE_SIZE = 8;

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleToggleLike = (id: number) => {
    dispatch(toggleLike(id));
  };

  const handleDelete = (id: number) => {
    deleteProduct(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  // Pagination uchun products slice
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedProducts = data?.slice(startIndex, endIndex) || [];
  const totalPages = Math.ceil((data?.length || 0) / PAGE_SIZE);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      {paginatedProducts.length > 0 ? (
        <>
          <ProductList
            products={paginatedProducts}
            onToggleLike={handleToggleLike}
            onDelete={handleDelete}
          />

          {/* Pagination controls */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Prev
            </Button>
            <Typography>
              {page} / {totalPages}
            </Typography>
            <Button
              variant="contained"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </Box>
        </>
      ) : (
        <Typography>No products found</Typography>
      )}
    </Container>
  );
}
