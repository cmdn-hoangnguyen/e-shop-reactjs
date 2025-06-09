import { LOCAL_STORAGE_KEY } from '../../constants/enum';
import { getLocalStorage } from '../../utils/localStorage';
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  type CartActionTypes,
  type CartState,
} from '../types/cartTypes';

const initialState: CartState = {
  cart: getLocalStorage(LOCAL_STORAGE_KEY.CART) ?? [],
};

export const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existing = state.cart.find((item) => item.id === action.payload.id);

      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }

    case DELETE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };

    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    default:
      return state;
  }
};
