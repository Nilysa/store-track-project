import React, { useState } from 'react';import { useParams} from 'react-router-dom';
import data from '../data';
import { Link } from 'react-router-dom';


function ProductScreen(props){
    const [qty, setQty] = useState(1);
    const { id } = useParams();  
    const product = data.products.find(x=> x._id === id);

    const handleAddToCart = () =>{
        props.history.push("/cart/", id + "?qty=" + qty);
    }

    return <div>
        <div className="back-to-result">
            <Link to={'/'}>Back To Result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} stars ({product.numReviews} reviews)
                    </li>
                    <li>
                        price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.countInStock>0? "In Stock" : ""}
                    </li>
                    <li>
                        Qty: <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map(x =>
                                <option key={x+1} value= {x+1}>{x+1}</option>
                            )}
                        </select>
                    </li>
                    <li>
                        {product.countInStock>0 &&
                        <button onClick={handleAddToCart} className="button-cart">
                            Add To Cart
                        </button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default ProductScreen;