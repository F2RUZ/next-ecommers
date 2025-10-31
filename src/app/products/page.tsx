"use client";
import { useGetProductsQuery } from "@/entities/product/api/productApi";

export default function ProductsPage() {
  const { data, isLoading, error } = useGetProductsQuery(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <h1>Products</h1>
      {data?.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
