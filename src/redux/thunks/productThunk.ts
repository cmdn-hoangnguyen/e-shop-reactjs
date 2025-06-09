import { ERROR_MESSAGE } from '../../constants/enum';
import { getProduct } from '../actions/productActions';
import type { AppDispatch } from '../store';

export const loadProducts = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch('/data/products.json');

    if (!response.ok) throw new Error(ERROR_MESSAGE.FAIL_FETCHING_PRODUCTS);

    const data = await response.json();
    dispatch(getProduct(data));
  };
};
