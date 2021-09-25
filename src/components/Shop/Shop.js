import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data)
            }) 
    }, [])

    const handleToAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    return (
        <div>
            <div className="search-container">
                <input 
                type="text"
                onChange={handleSearch} 
                name="" id="" 
                placeholder="Search Product" />
            </div>
            <div className="container">
                <div className="shop-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleToAddCart={handleToAddCart}>
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;