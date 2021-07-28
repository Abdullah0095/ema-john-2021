import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const only10 = fakeData.slice(0,15);
    const [products, setProducts] = useState(only10);
    return (
        <div>
            <h1>I am shpopppppp</h1>
            <h1>{products.length}</h1>
            <ol>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Shop;