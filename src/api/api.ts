import { ProductsResponse } from "../types/Product";

export const getSuggestions = async (query: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch suggestions");
  }
  const data: ProductsResponse = await response.json();
  return data.products.map((product) => product.title);
};
