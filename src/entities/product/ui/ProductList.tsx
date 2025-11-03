"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../model/productSlice";

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
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "16px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            flex: "1 1 calc(25% - 16px)",
            maxWidth: "calc(25% - 16px)",
            minWidth: "250px",
          }}
        >
          <ProductCard
            product={product}
            onToggleLike={() => onToggleLike(product.id)}
            onDelete={() => onDelete(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
