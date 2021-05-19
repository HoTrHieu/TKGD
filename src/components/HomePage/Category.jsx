import React from 'react';
import ProductItem from 'components/ProductItem';

const Category = (props) => {
  const { products = [], boldTitle, title } = props;
  return (
    <div className="container">
        <div className="row">
          <div className="category_title">
            <p className="category_title--bold">{boldTitle}</p>
            <p>&nbsp; {title}</p>
          </div>
            {products.map((product, index) => (
              <div key={index} className="col-3">
                <ProductItem {...product}/>
              </div>
            ))}
        </div>
      </div>
  );
};

export default Category;