import type { Product } from '../../constants/types';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export interface ProductState {
  loading: boolean;
  error: string | null;
  products: Product[];
}

export interface GetProductRequestAction {
  type: typeof GET_PRODUCTS_REQUEST;
}
export interface GetProductSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface GetProductFailureAction {
  type: typeof GET_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductActionType =
  | GetProductRequestAction
  | GetProductSuccessAction
  | GetProductFailureAction;
