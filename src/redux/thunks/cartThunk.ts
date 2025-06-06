import type { Dispatch } from 'redux';

import { toast } from 'react-toastify';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import type { CartItem } from '../../constants/types';
import { addToCart, deleteFromCart, setCart } from '../actions/cartActions';
import { LOCAL_STORAGE_KEY, TOAST_MESSAGE } from '../../constants/enum';

export const getItemsFromLocalStorage = () => {
  return (dispatch: Dispatch) => {
    const data: CartItem[] = getLocalStorage(LOCAL_STORAGE_KEY.CART) ?? [];
    dispatch(setCart(data));
  };
};

export const addItemToCart = (item: CartItem) => {
  return (dispatch: Dispatch, getData: any) => {
    dispatch(addToCart(item));

    setLocalStorage(LOCAL_STORAGE_KEY.CART, getData().cart.cart);
    toast.success(TOAST_MESSAGE.SUCCESS_ADD_PRODUCT_TO_CART);
  };
};

export const deleteItemFromCart = (id: number) => {
  return (dispatch: Dispatch, getData: any) => {
    const isConfirmed = window.confirm(TOAST_MESSAGE.CONFIRM_DELETE_PRODUCT_FROM_CART);

    if (isConfirmed) {
      dispatch(deleteFromCart(id));

      toast.success(TOAST_MESSAGE.SUCCESS_DELETE_PRODUCT_FROM_CART);
      return setLocalStorage(LOCAL_STORAGE_KEY.CART, getData().cart.cart);
    }

    toast.info(TOAST_MESSAGE.CANCEL_DELETE_PRODUCT_FROM_CART);
  };
};
