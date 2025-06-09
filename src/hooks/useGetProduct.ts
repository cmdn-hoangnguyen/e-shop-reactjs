import { useEffect, useState } from 'react';

import type { Product } from '../constants/types';

export const useGetProduct = () => {
  const [products, getProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        return getProducts(data);
      } catch (error) {
        console.error('Fetch product error:', error);
      }
    };

    fetchProducts();
  }, []);

  return { products };
};
