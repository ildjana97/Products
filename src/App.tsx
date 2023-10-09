import React from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails';
import { ProductProvider } from './components/ProductProvider';
import ProductsList from './components/ProductList';

function App() {
  return (
    <div className="App">
     <ProductProvider>
       <ProductsList/>
       <ProductDetails/>
     </ProductProvider>
    </div>
  );
}

export default App;
