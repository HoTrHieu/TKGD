import React from 'react';
import StarIcon from 'assets/images/products/star.png'

const ProductItem = (props) => {
  const { imgSrc, name, price, onClick } = props;
  return (
    <div className="product_item">
      <img onClick={onClick} src={imgSrc} alt="" className="product_item_image" />
      <p className="product_item_name">{name}</p>
      <p className="product_item_price">{price}</p>
      {[0,1,2,3,4].map((star) => (
        <img key={star} className="product_item_ratingstar" alt="star" src={StarIcon} />
      ))}
      <div className="product_item_btn">
        PURCHASE
      </div>
    </div>
  );
};

export default ProductItem;
