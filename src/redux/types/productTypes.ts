import type { Product } from '../../constants/types';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export interface ProductState {
  products: Product[];
}

export interface GetProductAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}

export type ProductActionType = GetProductAction;
