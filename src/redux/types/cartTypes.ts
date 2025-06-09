import type { CartItem } from '../../constants/types';

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const GET_CART = 'GET_CART';

export interface CartState {
  cart: CartItem[];
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

export interface DeleteFromCartAction {
  type: typeof DELETE_FROM_CART;
  payload: number;
}

export interface UpdateQuantityAction {
  type: typeof UPDATE_ITEM_QUANTITY;
  payload: { id: number; quantity: number };
}

export interface GetCartAction {
  type: typeof GET_CART;
  payload: CartItem[];
}

export type CartActionTypes =
  | AddToCartAction
  | DeleteFromCartAction
  | UpdateQuantityAction
  | GetCartAction;
