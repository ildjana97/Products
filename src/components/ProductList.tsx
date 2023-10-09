import React from 'react';
import { useProductContext } from './ProductProvider';

const ProductsList = () => {
    const { products, selectProduct }  = useProductContext();
    
    return(
        <div>
            <ul>
              {products.map((product: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                <li key={product.id} onClick={() => selectProduct(product.id)}>
                  {product.name}
                </li>
              ))}
            </ul>
        </div>
    )
}

export default ProductsList;