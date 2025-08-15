import {useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { useEffect, useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function ProductScreen() {  
    const [qty, setQty] = useState(1);
    const { id: productId } = useParams(); 
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (productId) {
            dispatch(detailsProduct(productId));
        }
    }, [dispatch, productId]);

    const handleAddToCart = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <div>
            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="details">
                    <div className="details-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="details-info">
                        <ul>
                            <li><h4>{product.name}</h4></li>
                            <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
                            <li>Price: <b>${product.price}</b></li>
                            <li>Description: <div>{product.description}</div></li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>Price: ${product.price}</li>
                            <li>Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</li>
                            {product.countInStock > 0 && (
                                <li>
                                    Qty:
                                    <select 
                                        value={qty} 
                                        onChange={(e) => setQty(Number(e.target.value))}
                                    >
                                        {[...Array(product.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </li>
                            )}
                            <li>
                                {product.countInStock>0 && <button onClick={handleAddToCart} className='button-cart'>Add To Cart</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductScreen;