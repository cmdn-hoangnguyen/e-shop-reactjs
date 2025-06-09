import { GET_PRODUCTS, type ProductActionType, type ProductState } from '../types/productTypes';

const initialState: ProductState = {
  products: [],
};

export const productReducer = (state = initialState, action: ProductActionType) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
