import React from 'react';
import ProductItem from '../ProductItem';

const ProductList = (props) => {
  const { products, onClick } = props;
  return (
    <div className="search_result_product_list">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div className="col-4" key={index}>
              <ProductItem {...product} onClick={onClick}/>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default ProductList;
