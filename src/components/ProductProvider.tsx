import React, { createContext, useContext, useState } from 'react';


interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
}

interface ProductContexttype {
    products: Product[];
    selectProduct: (productId: null)  => void;
    selectedProduct: Product
}
const ProductContext = React.createContext<ProductContexttype>;

export const useProductContext = () => {
    return useContext(ProductContext);
}

// interface Products{
//     products: Product[];
// }
export const ProductProvider = ({ children }: any) => {
    const [ selectedProduct, setSelectedProduct] = useState(null);
  
    const products = [
        {
            id: 1,
            name: 'Prod 1',
            price: 5,
            description: 'description 1'
        },
        {
            id: 2,
            name: 'Prod 2',
            price: 10,
            description: 'description 2'
        },
        {
            id: 3,
            name: 'Prod 3',
            price: 19,
            description: 'description 3'
        }
    ]
    
    const selectProduct = (productId: number) => {
        const product = products?.find((prod: any ) => prod.id === productId)
        // products?.filter((prod: any ) =>prod.id === productId);
        setSelectedProduct(product);
    }

    return(
        <ProductContext.Provider value={{ products, selectedProduct, selectProduct }}>
            {children}
        </ProductContext.Provider>
    )

}