import { ERROR_MESSAGE } from '../../constants/enum';
import type { Product } from '../../constants/types';
import type { AppDispatch } from '../store';
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../types/productTypes';

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (items: Product[]) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: items,
});

export const getProductsFailure = (error: string) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

export const loadProducts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(getProductsRequest);

    await fetch('/data/products.json')
      .then(async (response) => {
        const data = await response.json();
        dispatch(getProductsSuccess(data));
      })
      .catch((error) => {
        dispatch(getProductsFailure(error));
        throw new Error(ERROR_MESSAGE.FAIL_FETCHING_PRODUCTS);
      });
  };
};
