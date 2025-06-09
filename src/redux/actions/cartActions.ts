import type { CartItem } from '../../constants/types';
import { ADD_TO_CART, DELETE_FROM_CART, GET_CART, UPDATE_ITEM_QUANTITY } from '../types/cartTypes';

// Add item to cart
export const addToCart = (item: CartItem) => ({
  type: ADD_TO_CART,
  payload: item,
});

// Delete item from cart
export const deleteFromCart = (id: number) => ({
  type: DELETE_FROM_CART,
  payload: id,
});

// Update item quantity
export const updateQuantity = (id: number, quantity: number) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: { id, quantity },
});
