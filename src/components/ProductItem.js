import React from 'react';
import StarIcon from 'assets/images/products/star.png'
import rangtingStarIcon from 'assets/images/products/rangtingStar.png'
import { withRouter } from 'react-router-dom';
import { addCart } from './../utils/api';
import { formatMoney } from './../utils/helper';

const ProductItem = (props) => {
  const { imgSrc, name, price, rangting, history, id } = props;

  const addToCart = () => {
    const cart = {
      id: id,
      size: "small",
      quantity: 1,
    }

    addCart(cart);
  }

  return (
    <div className="product_item">
      <img onClick={() => history.push(`/detail/${id}`) } src={imgSrc} alt="" className="product_item_image" />
      <p className="product_item_name">{name}</p>
      <p className="product_item_price">{formatMoney(price)} VND</p>
      {[0,1,2,3,4].map((star) => (
        star < rangting ? 
        <img key={star} className="product_item_ratingstar" alt="star" src={rangtingStarIcon} />:
        <img key={star} className="product_item_ratingstar" alt="star" src={StarIcon} />
      ))}
      <div className="product_item_btn">
        <div onClick={() => history.push(`detail/${id}`)} className="detail">Detail</div>
        <div className="add-to-cart">
          +
          <div onClick={() => addToCart()} className="cart"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductItem);
