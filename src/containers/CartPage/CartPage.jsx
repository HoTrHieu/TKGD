import React, { useState, useEffect, useContext } from 'react';
import {compose} from 'redux';
import withLayout from 'components/Layout';
import CardContext from '../../cardContext';
import { DATA_ALL } from '../../constants';
import css from './CartPage.module.css';
import { withRouter } from 'react-router-dom';

const CartPage = props => {
  const {listCard, updateListCard} = useContext(CardContext);
  const listOrder = listCard.reduce((prev, cur) => {
    const product = DATA_ALL.find(item => Number(item.id) === Number(cur.id));
    if(product) {
      return [
        ...prev,
        {
          ...product,
          ...cur,
        }
      ]
    }
    return prev;
  }, [])
  
  const changeQuantity = (id, type) => {
    const indexProduct = listCard.findIndex(item => Number(item.id) === Number(id));
    const product = listCard[indexProduct];
    
    if(type === '-'){
      const newQuantity = product.quantity - 1;
      if(newQuantity === 0) {
        const newListCart = listCard.filter(item => Number(item.id) !== Number(id));
        updateListCard([
          ...newListCart
        ])
      }else {
        product.quantity = newQuantity;
        listCard[indexProduct] = product;
        updateListCard([
          ...listCard,
        ])
      }
    }
    else {
      const newQuantity = product.quantity + 1;
      if(newQuantity < 6){
        product.quantity = newQuantity;
        listCard[indexProduct] = product;
        updateListCard([
          ...listCard
        ])
      }
    }
  }

  const totalPrice = listOrder.reduce((sum, item) => {
    return sum + Number(item.price.split(' ')[0].replace(/,/g, ''))* item.quantity
  }, 0)

  const strPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={css.cartContainer}>
      <div className={css.cartTitle}>CART</div>
      <div className={css.cartContent}>
        <div className={css.cartList}>
          {
            listOrder.map(product => {
              return (
                <div className={css.cartItem}>
                  <img onClick={() => product.onClick(props.history)} className={css.itemImg} src={product.imgSrc}/> 
                  <div className={css.itemInfo}>
                    <div className={css.itemTitle}>{product.name}</div> 
                    <div className={css.itemPrice}>{product.price}</div>
                    <div className={css.itemAction}>
                      <button onClick={() => changeQuantity(product.id, '-')} className={css.btnSub}>-</button>
                      <span className={css.number}>{product.quantity}</span>
                      <button onClick={() => changeQuantity(product.id, '+')} className={css.btnAdd}>+</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className={css.cartInfo}>
          <div className={css.cartInfoContent}>
            <div className={css.titleInfo}>CART INFORMATION</div>
            <div className={css.priceInfo}>
              <p style={{marginBottom: 0}}><span className={css.priceTitle}>Provisional:</span> <span className={css.priceValue}>{strPrice} VND</span></p>
              <p className={css.vatInfo}><span className={css.priceVat}>(VAT included)</span></p>
            </div>
            <button onClick={() => props.history.push('/payment')} className={css.btnBook}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default compose(withLayout, withRouter)(CartPage);
