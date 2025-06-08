import { toast } from 'react-toastify';
import { getLocalStorage } from '../../utils/localStorage';
import type { CartItem } from '../../constants/types';
import { addToCart, deleteFromCart, setCart, updateQuantity } from '../actions/cartActions';
import { LOCAL_STORAGE_KEY, TOAST_MESSAGE } from '../../constants/enum';
import type { AppDispatch } from '../store';

export const getItemsFromLocalStorage = () => {
  return (dispatch: AppDispatch) => {
    const data: CartItem[] = getLocalStorage(LOCAL_STORAGE_KEY.CART) ?? [];
    dispatch(setCart(data));
  };
};

export const addItemToCart = (item: CartItem) => {
  return (dispatch: AppDispatch) => {
    dispatch(addToCart(item));
    toast.success(TOAST_MESSAGE.SUCCESS_ADD_PRODUCT_TO_CART);
  };
};

export const deleteItemFromCart = (id: number) => {
  return (dispatch: AppDispatch) => {
    const isConfirmed = window.confirm(TOAST_MESSAGE.CONFIRM_DELETE_PRODUCT_FROM_CART);

    if (isConfirmed) {
      dispatch(deleteFromCart(id));

      return toast.success(TOAST_MESSAGE.SUCCESS_DELETE_PRODUCT_FROM_CART);
    }
    toast.info(TOAST_MESSAGE.CANCEL_DELETE_PRODUCT_FROM_CART);
  };
};

export const updateItemQuantity = (id: number, quantity: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(updateQuantity(id, quantity));
  };
};
