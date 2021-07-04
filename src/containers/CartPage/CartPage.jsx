//import 'assets/css/base.scss';
import React, { useState, useEffect } from 'react';
import withLayout from 'components/Layout';
//import BannerImg from 'assets/images/banner.png';
// import { DATA_HOME_PAGE } from '../../constants';
// import { Category } from 'components/HomePage';
import css from './CartPage.module.css';
import ShopImg from 'assets/images/cartPage/shopImg1.png';
//import './CartPage.css';

const CartPage = props => {
  return (
    <div className={css.cartContainer}>
      <div className={css.cartTitle}>GIỎ HÀNG</div>
      <div className={css.cartContent}>
        <div className={css.cartList}>
          <div className={css.cartItem}>
            <img className={css.itemImg} src={ShopImg}/> 
            <div className={css.itemInfo}>
              <div className={css.itemTitle}>ROMANTIC PINK</div> 
              <div className={css.itemPrice}>1,650,000 VND</div>
              <div className={css.itemAction}>
                <button className={css.btnSub}>-</button>
                <span className={css.number}>1</span>
                <button className={css.btnAdd}>+</button>
              </div>
            </div>
          </div>

          <div className={css.cartItem}>
            <img className={css.itemImg} src={ShopImg}/> 
            <div className={css.itemInfo}>
              <div className={css.itemTitle}>ROMANTIC PINK</div> 
              <div className={css.itemPrice}>1,650,000 VND</div>
              <div className={css.itemAction}>
                <button className={css.btnSub}>-</button>
                <span className={css.number}>1</span>
                <button className={css.btnAdd}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.cartInfo}>
          <div className={css.cartInfoContent}>
            <div className={css.titleInfo}>THÔNG TIN GIỎ HÀNG</div>
            <div className={css.priceInfo}>
              <p style={{marginBottom: 0}}><span className={css.priceTitle}>Tạm tính:</span> <span className={css.priceValue}>4,150,000 VND</span></p>
              <p className={css.vatInfo}><span className={css.priceVat}>(Chưa bao gồm thuế VAT)</span></p>
            </div>
            <button className={css.btnBook}>Đặt Hàng</button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default withLayout(CartPage);
