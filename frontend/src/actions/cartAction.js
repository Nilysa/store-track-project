import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import axios from 'axios';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/products/${productId}`);
        dispatch({
            type: CART_ADD_ITEM, 
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty: Number(qty) // Ensure qty is a number
            }
        });
        // Save to localStorage for persistence
        localStorage.setItem('cartItems', JSON.stringify(getState().cart?.cartItems || []));
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

export const removeFromCart = (productId) => (dispatch) => {
    dispatch({type:CART_REMOVE_ITEM, payload:productId});
}