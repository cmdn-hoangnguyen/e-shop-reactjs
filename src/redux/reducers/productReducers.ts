import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  type ProductActionType,
  type ProductState,
} from '../types/productTypes';

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
};

export const productReducer = (state = initialState, action: ProductActionType) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };

    case GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
