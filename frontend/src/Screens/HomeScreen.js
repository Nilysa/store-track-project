import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen() {
    return (
        <ul className="products">
            {data.products.map(product => (
                <li key={product._id}>
                    <div className="product">
                        <Link to={`/Product/${product._id}`}>
                            <img className="product-image" src={product.image} alt="product" />
                        </Link>
                        <div className="product-name">
                            <Link to={`/Product/${product._id}`}>{product.name}</Link>
                        </div>
                        <div className="product-artist">{product.artist}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">
                            {product.rating} stars ({product.numReviews} reviews)
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default HomeScreen;