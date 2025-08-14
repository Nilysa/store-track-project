import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS, 
  PRODUCT_LIST_FAIL
} from '../constants/productConstants';

const initialState = {
  products: [],
  loading: false,
  error: null
};

export const productListReducer = (state = initialState, action) => {  // Use initialState here
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};