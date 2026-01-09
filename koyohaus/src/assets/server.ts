import { products, product } from "./data.ts"

export const fetchProductById = (id: number): Promise<product | null> => {
  return new Promise((resolve) => {
    const foundItem = products.find(p => p.id === id) || null;
    resolve(foundItem);
  });
};