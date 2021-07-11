import React, { useState, useEffect, useContext } from 'react';
import withLayout from 'components/Layout';
import css from './CartPage.module.css';
import ShopImg from 'assets/images/cartPage/shopImg1.png';
import CardContext from '../../cardContext'

const CartPage = props => {
  const {listCard, updateListCard} = useContext(CardContext);
  console.log('show: ', listCard)

  return (
    <div className={css.cartContainer}>
      <div className={css.cartTitle}>CART</div>
      <div className={css.cartContent}>
        <div className={css.cartList}>
          {
            listCard.map(product => {
              
              return (
                <div className={css.cartItem}>
                  <img className={css.itemImg} src={ShopImg}/> 
                  <div className={css.itemInfo}>
                    <div className={css.itemTitle}>{product.name}</div> 
                    <div className={css.itemPrice}>1,650,000 VND</div>
                    <div className={css.itemAction}>
                      <button className={css.btnSub}>-</button>
                      <span className={css.number}>1</span>
                      <button className={css.btnAdd}>+</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
          

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
