"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { Product } from "../model/productSlice";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onToggleLike: (id: number) => void; 
  onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onToggleLike,
  onDelete,
}) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={3}>
          <ProductCard
            product={product}
            onToggleLike={() => onToggleLike(product.id)} 
            onDelete={() => onDelete(product.id)} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
