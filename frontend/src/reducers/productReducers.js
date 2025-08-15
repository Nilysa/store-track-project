import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS, 
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST
} from '../constants/productConstants';

// Separate initial states for each reducer
const productListInitialState = {
  products: [],
  loading: false,
  error: null
};

const productDetailsInitialState = {
  product: {},  // Changed from products array to single product object
  loading: false,
  error: null
};

export const productListReducer = (state = productListInitialState, action) => {  
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

export const productDetailsReducer = (state = productDetailsInitialState, action) => {  
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, product: {} };  // Changed from products to product
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};