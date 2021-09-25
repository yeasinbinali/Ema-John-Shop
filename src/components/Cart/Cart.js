import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = total > 0 ? 15:0;
    const tax = (total + shipping) / 10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart-container">
            <h2>Order Summary</h2>
            <p style={{ fontSize: '18px', textAlign: 'center' }}>Items Ordered: {props.cart.length}</p>
            <br />
            <div className="cart-price">
                <p>Total: {total.toFixed(2)}</p>
                <p>Shipping: {shipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;