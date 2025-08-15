import { Link, useParams } from 'react-router-dom';  // Add useParams
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

    useEffect(() => {
  if (productId) {
    dispatch(detailsProduct(productId));
  }
}, [dispatch, productId]);

    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back To Result</Link>
            </div>
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
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.rating} Stars ({product.numReviews} Reviews)
                            </li>
                            <li>
                                Price: <b>${product.price}</b>
                            </li>
                            <li>
                                Description:
                                <div>{product.description}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>Price: ${product.price}</li>
                            <li>
                                Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                            </li>
                            <li>
                                Qty:<select value={qty} onChange = {(e) => {setQty(e.target.value)}}>
                                    {[...Array(product.countInStock.keys())].map(x =>
                                        <option value={x+1}>{x+1}</option>
                                    )}
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductScreen;