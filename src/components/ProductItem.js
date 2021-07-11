import React from 'react';
import StarIcon from 'assets/images/products/star.png'
import rangtingStarIcon from 'assets/images/products/rangtingStar.png'
import { withRouter } from 'react-router-dom';

const ProductItem = (props) => {
  const { imgSrc, name, price, rangting, onClick, history } = props;

  return (
    <div className="product_item">
      <img onClick={() => onClick(history) } src={imgSrc} alt="" className="product_item_image" />
      <p className="product_item_name">{name}</p>
      <p className="product_item_price">{price}</p>
      {[0,1,2,3,4].map((star) => (
        star < rangting ? 
        <img key={star} className="product_item_ratingstar" alt="star" src={rangtingStarIcon} />:
        <img key={star} className="product_item_ratingstar" alt="star" src={StarIcon} />
      ))}
      <div className="product_item_btn">
        <div className="detail">Chi tiết</div>
        <div className="add-to-cart">
          +
          <div className="cart"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductItem);
