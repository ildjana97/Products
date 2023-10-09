import React from 'react';
import { useProductContext } from './ProductProvider';

const ProductDetails = () => {
    const { selectedProduct } = useProductContext();

    return(
        <>
            <h1>Product details</h1>
            {selectedProduct ? (
                <div>
                    <h5>{selectedProduct.name}</h5>
                    <p>{selectedProduct.price}</p>
                    <p>{selectedProduct.description}</p>
                </div>
            ): (
                <p>select a product</p>
            )}
        </>
    )
}

export default ProductDetails;