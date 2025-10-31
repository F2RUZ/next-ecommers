import { RootState } from "@/appStore/store";

export const selectProducts = (state: RootState) => state.product.products;
export const selectFavoriteProducts = (state: RootState) =>
  state.product.products.filter((p) => p.liked);
