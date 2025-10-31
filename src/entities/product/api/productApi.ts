import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../model/productSlice";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      providesTags: ["Products"],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation<Product, Partial<Product> & { id: number }>(
      {
        query: ({ id, ...rest }) => ({
          url: `products/${id}`,
          method: "PUT",
          body: rest,
        }),
        invalidatesTags: ["Products"],
      }
    ),
    deleteProduct: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),

    // NEW: Toggle Like endpoint
    toggleLike: builder.mutation<Product, { id: number; liked: boolean }>({
      query: ({ id, liked }) => ({
        url: `products/${id}`,
        method: "PATCH", // PATCH ishlatish tavsiya qilinadi
        body: { liked },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useToggleLikeMutation, // <-- yangi endpoint hook
} = productApi;
