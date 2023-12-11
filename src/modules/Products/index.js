import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import ProductCard from '../../components/ProductCard';
import productsData from '../../data/products.json';

const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Use os dados do arquivo JSON importado
    setProducts(productsData);
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default Products;
