import { useEffect, useState } from "react";
import type { Product } from "../constants/types";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        return setProducts(data.products);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProducts();
  }, []);

  return { products };
};
