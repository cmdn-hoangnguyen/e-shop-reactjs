import type { Middleware } from 'redux';

import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  UPDATE_ITEM_QUANTITY,
  type CartActionTypes,
} from './types/cartTypes';
import { LOCAL_STORAGE_KEY } from '../constants/enum';
import { setLocalStorage } from '../utils/localStorage';
import type { RootState } from './store';

export const localStorageMiddleWare: Middleware<{}, RootState> = (store) => (next) => (action) => {
  const result = next(action);

  const cartActions = [ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_QUANTITY, GET_CART];
  const cartAction = action as CartActionTypes;

  if (cartActions.includes(cartAction.type)) {
    setLocalStorage(LOCAL_STORAGE_KEY.CART, store.getState().cart.cart);
  }

  return result;
};
