import React from 'react';
import css from './PaymentPage.module.css'
import withLayout from 'components/Layout';
import ShopImg from 'assets/images/cartPage/shopImg1.png';

const PaymentPage = props => {
    return (
        <div className={css.cartContainer}>
          <div className={css.cartTitle}>THANH TOÁN</div>
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
                    <span>Tạm tính:</span>
                    <span>4,000,000 VND</span>
                  </div>
                  <div className={css.delivery}>
                    <span>Phí giao hàng:</span>
                    <span>50.000 VND</span>
                  </div>
                  <div className={css.method}>
                    <span>Phương thức thanh toán: </span>
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
                    <span>Thành tiền: <span className={css.price}>4,050,000&nbsp;VND</span></span>
                  </div>
                  <button className={css.btnOrder}>Đặt hàng</button>
                </div>  
              </div>
            </div>
          </div>
        </div> 
      );
};

export default withLayout(PaymentPage);