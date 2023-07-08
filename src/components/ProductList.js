import React from 'react';
import Product from './Product';
import productData from '../data/productData';
import { useParams } from 'react-router-dom'; // Archivo para almacenar datos de productos.

export const ProductList = () => {
  const { productId } = useParams();
  return (
    <div className="container-fluid">
      <h1>Productos: {productId}</h1>
      {productData.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;