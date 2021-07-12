import React, {useContext} from 'react';
import css from './ProfilePage.module.css'
import withLayout from 'components/Layout';
import ShopImg from 'assets/images/cartPage/shopImg1.png';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import CardContext from '../../cardContext';
import { DATA_ALL } from '../../constants';

const ProfilePage = props => {
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
            <div className={css.cartTitle}>HỒ TRUNG HIẾU</div>
            <div className={css.cartInfo2}>
                <div className={css.cartTitle2} >Thông tin tài khoản</div>
                <div className={css.cartTitle2} >Theo dõi đơn hàng</div>
                <div className={css.cartTitle2} >Đăng xuất</div>
            </div>
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
                
                <div className={css.text}>
                    <span >Họ và Tên</span>                      
                    <div className={css.name}>
                        <input type="text"/>  
                    </div>  
                </div>

                <div className={css.text}>
                  <span>Số  điện thoại</span>
                  <div className={css.name}>
                    {/* <span>SDT:</span><br/> */}
                    <input type="text" />  
                  </div>
                </div>

                <div className={css.text}>
                  <span>Email</span>
                  <div className={css.name}>
                    {/* <span>SDT:</span><br/> */}
                    <input type="text" />  
                  </div>
                </div>

                <div className={css.text}>
                  <span>Giới tính</span>
                  <div className={css.male}>                    
                      <input type="radio" />
                      <label>Nam</label>
                    </div>
                    <div className={css.female}>
                      <input type="radio" />
                      <label htmlFor="">Nữ</label>
                    </div>
                </div>

                <div className={css.text}>
                  <label>Ngày Sinh</label><br/>
                  <div className={css.name}>
                    {/* <span>SDT:</span><br/> */}
                    <input type="date" />  
                  </div>
                </div>
               
                <div className={css.totlaContainer}>
                  {/* <div className={css.priceInfo}>
                    <span>Total price: <span className={css.price}>{totalPrice}&nbsp;VND</span></span>
                  </div> */}
                  <button className={css.btnOrder}>COMFIRM</button>
                </div>
                
              </div>
            </div>
          </div>
        </div> 
      );
};

export default compose(withLayout, withRouter)(ProfilePage);