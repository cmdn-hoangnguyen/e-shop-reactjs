import type { CartItem } from '../../constants/types';
import { ADD_TO_CART, DELETE_FROM_CART, GET_CART, UPDATE_ITEM_QUANTITY } from '../types/cartTypes';

export const addToCart = (item: CartItem) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const deleteFromCart = (id: number) => ({
  type: DELETE_FROM_CART,
  payload: id,
});

export const updateQuantity = (id: number, quantity: number) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: { id, quantity },
});

export const setCart = (items: CartItem[]) => ({
  type: GET_CART,
  payload: items,
});
