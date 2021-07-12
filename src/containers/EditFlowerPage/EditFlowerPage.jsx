import React, {useContext} from 'react';
import css from './EditFlowerPage.module.css'
import withLayout from 'components/Layout';
import ShopImg from 'assets/images/cartPage/shopImg1.png';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import CardContext from '../../cardContext';
import { DATA_ALL } from '../../constants';

const EditFlowerPage = props=>{
    return (
        <div className={css.cartContainer}>
          <div className={css.cartTitle}>HOA DESIGN THEO YÊU CẦU</div>
          <div className={css.cartContent}>
          <div className={css.cartList}></div>
            <div className={css.cartInfo}>
              <div className={css.cartInfoContent}>
                <div className={css.titleInfo}>Điền thông tin theo yêu cầu</div>
                <div className={css.address}>
                  <label>Chủ đề</label><br/>
                  <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Sinh nhật</option>
                        <option value="2">Thôi nôi</option>
                        <option value="3">Nhà hàng , tiệc cưới</option>
                    </select>
                </div>
                <div className={css.address}>
                  <label>Tông màu</label><br/>
                  <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Hồng cánh sen</option>
                        <option value="2">Tím mộng mơ</option>
                        <option value="3">Đỏ mãnh liệt</option>
                        <option value="4">Đen trắng</option>
                    </select>
                </div>
                <div className={css.nameFone}>
                  <div className={css.name}>
                    <span >Loại Hoa </span><br/>
                    <input type="text"  value ="Hoa cúc"/>
                  </div>
                  <div className={css.name}>
                    <span></span><br/>
                    <input type="text" value="hoa hồng"/>  
                  </div>
                </div>
                {/* <div>
                  <input type="checkbox" />
                  <span> Tạo tài khoản</span>
                </div> */}
                <div className={css.deliveryContainer}>
                  <div className={css.method}>
                    <span>Lá trang trí: </span>
                    <div className={css.cod}>                    
                      <input type="checkbox" />
                      <label>Thiên môn</label>
                    </div>
                    <div className={css.cod}>
                      <input type="checkbox" />
                      <label htmlFor="">Trắc bánh diệp</label>
                    </div>
                  </div>
                </div>
                <div className={css.deliveryContainer}>
                  <div className={css.method}>
                    <span>Phụ kiện: </span>
                    <div className={css.cod}>                    
                      <input type="checkbox" />
                      <label>Dây băng</label>
                    </div>
                    <div className={css.cod}>
                      <input type="checkbox" />
                      <label htmlFor="">Giấy gói</label>
                    </div>
                  </div>
                </div>
                <div className={css.note}>
                  <label htmlFor="">Note cho cửa hàng :</label><br/>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                {/* <button className={css.btnBook}>Đặt Hàng</button> */}
                <div className={css.totlaContainer}>
                  <div className={css.priceInfo}>
                    
                  </div>
                  <button className={css.btnOrder}>Gửi</button>
                </div>  
              </div>
            </div>
          </div>
        </div> 
    )
}

export default compose(withLayout, withRouter)(EditFlowerPage);