import type { Product } from '../../constants/types';
import { GET_PRODUCTS } from '../types/productTypes';

export const getProduct = (items: Product[]) => ({
  type: GET_PRODUCTS,
  payload: items,
});
