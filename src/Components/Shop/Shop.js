import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const only15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(only15);
    return (
        <div className='shop-container'>
            <div className="products-container">
                <ol>
                    {
                        products.map(product => <Product product={product}></Product>)
                        
                    }
                    
                    
                </ol>
            </div>
            <div className="cart-container">
                <div style={{textAlign: 'center'}}>
                    <h2>Order Summary</h2>
                    <h4>Items ordered: </h4>
                </div>
                <div>
                    <small>
                        <p>items</p>
                        <p>Shipping & Handling</p>
                        <p>Total before tax:</p>
                        <p>Estimated tax: </p>
                        <h4>Order Total</h4>
                    </small>
                    <button className='button'>Review your orders</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;