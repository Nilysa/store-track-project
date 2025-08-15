import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToCart, removeFromCart } from "../actions/cartAction";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CartScreen() {
    const cartItems = useSelector(state => state.cart?.cartItems || []);
    const { id: productId } = useParams();
    const [searchParams] = useSearchParams();
    const qty = Number(searchParams.get('qty')) || 1;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const checkoutHandler = () => {
        navigate('/signin?redirect=shipping');
    }

    return (
        <div className='cart'>
            <div className='cart-list'>
                <ul className='cart-list-container'>
                    <li>
                        <h3>Shopping Cart</h3>
                        
                        <div>Price</div>
                    </li>
                    {cartItems.length === 0 ? (
                        <div>Cart Is Empty</div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.product}>
                                <img className='cart-image' src={item.image} alt={item.name} />
                                <div className='cart-name'>
                                    <div>
                                        <Link to={`/product/${item.product}`}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div>
                                        Qty:
                                        <select 
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {[...Array(item.countInStock).keys()].map(x => (
                                                <option key={x+1} value={x+1}>
                                                    {x+1}
                                                </option>
                                            ))}
                                        </select>
                                        <button className='button-delete' type='button' onClick={() => removeFromCartHandler(item.product)}>
                                            delete
                                        </button>
                                    </div>
                                </div>
                                <div className='cart-price'>${item.price}</div>
                            </div>
                        ))
                    )}
                </ul>
            </div>
            <div className='cart-action'>
                <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
                </h3>
                <button onClick={checkoutHandler} className='button-primary' disabled={cartItems.length===0}>
                    Proceed to Check out
                </button>
            </div>
        </div>
    );
}

export default CartScreen;