"use client";

import React from "react";
import { Grid } from "@mui/material";
import { Product } from "../model/productSlice";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onToggleLike: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductList = ({
  products,
  onToggleLike,
  onDelete,
}: ProductListProps) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center" 
      alignItems="center" 
    >
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <ProductCard
            product={product}
            onToggleLike={onToggleLike}
            onDelete={onDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
