import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  UPDATE_ITEM_QUANTITY,
  type CartActionTypes,
  type CartState,
} from '../types';

const initialState: CartState = {
  cart: [],
};

export const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case GET_CART:
      return { ...state, cart: action.payload };

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
