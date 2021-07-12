import React, { useState, useEffect, useContext } from 'react';
import {compose} from 'redux';
import withLayout from 'components/Layout';
import css from './CartPage.module.css';
import { withRouter } from 'react-router-dom';
import { 
  getCartList,
  getAllProduct,
  deleteCart,
  addCart,
} from './../../utils/api';
import { formatMoney, currency } from './../../utils/helper';
import classNames from 'classnames';

const CartPage = props => {
  const [listCard, setListCard] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const listOrder = listCard.reduce((prev, cur) => {
    const product = listProducts.find(item => Number(item.id) === Number(cur.id));
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
  
  const loadListCart = () => {
    getCartList().then(res => {
      if(res.data) {
        setListCard(res.data)
      }
    })
  }

  useEffect(() => {
    getAllProduct().then(res => {
      if(res.data) {
        setListProducts(res.data);
      }
    })
    loadListCart();
  }, [])

  const changeQuantity = (cusProduct, type) => {
    if(type === '-'){
      const newQuantity = Number(cusProduct.quantity) - 1;
      if(newQuantity === 0) {
        deleteCart(cusProduct.id).then(res => loadListCart());
      } else {
        const modifyCart = {
          id: cusProduct.id,
          size: cusProduct.size,
          quantity: newQuantity
        }
        addCart(modifyCart).then(res => loadListCart());
      }

    }else {
      const newQuantity = Number(cusProduct.quantity) + 1;
      if(newQuantity < 6) {
        const modifyCart = {
          id: cusProduct.id,
          size: cusProduct.size,
          quantity: newQuantity
        }
        addCart(modifyCart).then(res => loadListCart());
      }
    }
  }

  const changeSize = (cusProduct, size) => {
    const modifyCart = {
      id: cusProduct.id,
      size: size,
      quantity: cusProduct.quantity
    }
    addCart(modifyCart).then(res => loadListCart());
  };

  const totalPrice = listOrder.reduce((sum, item) => {
     return sum + Number(item.price)* item.quantity
  }, 0)


  return (
    <div className={css.cartContainer}>
      <div className={css.cartTitle}>CART</div>
      <div className={css.cartContent}>
        <div className={css.cartList}>
          {
            listOrder.map(product => {
              return (
                <div className={css.cartItem}>
                  <img onClick={() => props.history.push(`/detail/${product.id}`)} className={css.itemImg} src={product.imgSrc}/> 
                  <div className={css.itemInfo}>
                    <div className={css.itemTitle}>{product.name}</div> 
                    <div className={css.itemPrice}>{formatMoney(product.price)} {currency}</div>
                    <div className={css.listSize}>
                      <div
                        onClick={() => changeSize(product, "small")}
                        className={classNames(css.boxType, {
                          [css.choonse]: product.size === "small",
                        })}
                      >
                        S
                      </div>
                      <div
                        onClick={() => changeSize(product, "medium")}
                        className={classNames(css.boxType, {
                          [css.choonse]: product.size === "medium",
                        })}
                      >
                        M
                      </div>
                      <div
                        onClick={() => changeSize(product, "large")}
                        className={classNames(css.boxType, {
                          [css.choonse]: product.size === "large",
                        })}
                      >
                        L
                      </div>
                    </div>
                    <div className={css.itemAction}>
                      <button onClick={() => changeQuantity(product, '-')} className={css.btnSub}>-</button>
                      <span className={css.number}>{product.quantity}</span>
                      <button onClick={() => changeQuantity(product, '+')} className={css.btnAdd}>+</button>
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
              <p style={{marginBottom: 0}}><span className={css.priceTitle}>Provisional:</span> <span className={css.priceValue}>{formatMoney(totalPrice)} {currency}</span></p>
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
