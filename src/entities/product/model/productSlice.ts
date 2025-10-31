import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  liked?: boolean;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) product.liked = !product.liked;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    deleteProductLocal: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

export const { toggleLike, setProducts, deleteProductLocal } =
  productSlice.actions;
export default productSlice.reducer;
