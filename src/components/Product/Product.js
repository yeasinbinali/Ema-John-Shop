import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller, stock, price, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="side-container">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="feature-container">
                <p style={{color:'blue', fontSize:'20px'}}>{name}</p>
                <p>by: {seller}</p>
                <p style={{fontSize:'20px'}}>Price: ${price}</p>
                <p>only {stock} left in stock-order soon</p>
                <Rating
                initialRating = {star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly></Rating>
                <br />
                <br />
                <button onClick={()=> props.handleToAddCart(props.product)} className="feature-btn">{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;