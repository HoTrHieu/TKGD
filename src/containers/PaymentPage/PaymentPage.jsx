import React, {useContext, useState, useEffect} from 'react';
import css from './PaymentPage.module.css'
import withLayout from 'components/Layout';
import ShopImg from 'assets/images/cartPage/shopImg1.png';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import CardContext from '../../cardContext';
import { DATA_ALL } from '../../constants';
import { 
  getCartList,
  getAllProduct,
} from './../../utils/api';
import { formatMoney, currency } from './../../utils/helper';

const PaymentPage = props => {
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

  const delivery = 50000;


  const subPrice = listOrder.reduce((sum, item) => {
    return sum + Number(item.price)* item.quantity
  }, 0)

  const totalPrice = subPrice + 50000;

    return (
        <div className={css.cartContainer}>
          <div className={css.cartTitle}>PAYMENT</div>
          <div className={css.cartContent}>
            <div className={css.cartList}>
              {
                listOrder.map(product => {
                  return (
                    <div className={css.cartItem}>
                      <img onClick={() => product.onClick(props.history)} className={css.itemImg} src={product.imgSrc}/> 
                      <div className={css.itemInfo}>
                        <div className={css.itemTitle}>{product.name}</div> 
                        <div>Size: {product.size}</div>
                        <div className={css.itemAction}>
                          <span>{product.quantity} x {formatMoney(product.price)} {currency}</span>
                          <div className={css.breakLine}></div>
                          <div className={css.priceItem}>{formatMoney(product.price * product.quantity)} {currency}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className={css.cartInfo}>
              <div className={css.cartInfoContent}>
                <div className={css.titleInfo}>PAYMENT INFOMATION</div>
                
                <div className={css.nameFone}>
                  <div className={css.name}>
                    <span >Name: </span><br/>
                    <input type="text" />
                  </div>
                  <div className={css.phone}>
                    <span>Phone:</span><br/>
                    <input type="text" />  
                  </div>
                </div>
                <div className={css.address}>
                  <label>Address:</label><br/>
                  <input type="text" />
                </div>
                <div className={css.note}>
                  <label htmlFor="">Note</label><br/>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                {/* <div>
                  <input type="checkbox" />
                  <span> Tạo tài khoản</span>
                </div> */}
                <div className={css.deliveryContainer}>
                <div className={css.delivery}>
                    <span>Provisional:</span>
                    <span>{formatMoney(subPrice)} {currency}</span>
                  </div>
                  <div className={css.delivery}>
                    <span>Delivery charges:</span>
                    <span>{formatMoney(delivery)} {currency}</span>
                  </div>
                  <div className={css.method}>
                    <span>Payment method: </span>
                    <div className={css.cod}>                    
                      <input type="checkbox" />
                      <label>COD</label>
                    </div>
                    <div className={css.bank}>
                      <input type="checkbox" />
                      <label htmlFor="">Bank transfer</label>
                    </div>
                  </div>
                </div>
                {/* <button className={css.btnBook}>Đặt Hàng</button> */}
                <div className={css.totlaContainer}>
                  <div className={css.priceInfo}>
                    <span>Total price: <span className={css.price}>{formatMoney(totalPrice)}&nbsp;{currency}</span></span>
                  </div>
                  <button className={css.btnOrder}>COMFIRM</button>
                </div>  
              </div>
            </div>
          </div>
        </div> 
      );
};

export default compose(withLayout, withRouter)(PaymentPage);