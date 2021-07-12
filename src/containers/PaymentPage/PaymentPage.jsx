import React, {useContext} from 'react';
import css from './PaymentPage.module.css'
import withLayout from 'components/Layout';
import ShopImg from 'assets/images/cartPage/shopImg1.png';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import CardContext from '../../cardContext';
import { DATA_ALL } from '../../constants';

const PaymentPage = props => {
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

  const subPrice = listOrder.reduce((sum, item) => {
    return sum + Number(item.price.split(' ')[0].replace(/,/g, ''))* item.quantity
  }, 0)

  const strPrice = subPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const totalPrice = (subPrice + 50000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const getPriceItem = (product) => {
    const price = Number(product.price.split(' ')[0].replace(/,/g, ''))* product.quantity;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

    return (
        <div className={css.cartContainer}>
          <div className={css.cartTitle}>THANH TOÁN</div>
          <div className={css.cartContent}>
            <div className={css.cartList}>
              {
                listOrder.map(product => {
                  return (
                    <div className={css.cartItem}>
                      <img onClick={() => product.onClick(props.history)} className={css.itemImg} src={product.imgSrc}/> 
                      <div className={css.itemInfo}>
                        <div className={css.itemTitle}>{product.name}</div> 
                        <div className={css.itemAction}>
                          <span>{product.price} x {product.quantity}</span>
                          <div className={css.breakLine}></div>
                          <div className={css.priceItem}>{getPriceItem(product)} VND</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className={css.cartInfo}>
              <div className={css.cartInfoContent}>
                <div className={css.titleInfo}>THÔNG TIN THANH TOÁN</div>
                
                <div className={css.nameFone}>
                  <div className={css.name}>
                    <span >Tên: </span><br/>
                    <input type="text" />
                  </div>
                  <div className={css.phone}>
                    <span>SDT:</span><br/>
                    <input type="text" />  
                  </div>
                </div>
                <div className={css.address}>
                  <label>Địa chỉ:</label><br/>
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
                    <span>{strPrice} VND</span>
                  </div>
                  <div className={css.delivery}>
                    <span>Phí giao hàng:</span>
                    <span>50.000 VND</span>
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
                    <span>Total price: <span className={css.price}>{totalPrice}&nbsp;VND</span></span>
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