import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "@/entities/product/api/productApi";
import productReducer from "@/entities/product/model/productSlice"; // 👈 qo‘shildi

export const store = configureStore({
  reducer: {
    product: productReducer, // 👈 bu slice Redux holatiga ulanadi
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
