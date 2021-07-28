import React from 'react';

const Product = (props) => {
    const product = props.product;
    console.log(product);
    return (
        <div className='product-container'>
            <div><img src={product.img} alt="" /></div>
            <div className='product-details'>
                <h3 style={{ color: 'teal' }}>{product.name}</h3>
                <p>by {product.seller}</p>
                <div>
                    <div>
                        <h4>${product.price}</h4>
                        <small>only {product.stock} left in stock</small>
                        <div>
                            <button className='button'>add to cart</button>
                        </div>
                    </div>
                    <div>
                        <p>Features</p>
                        <small></small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;