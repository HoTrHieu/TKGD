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
          <div className={css.cartTitle}>FLOWERS DESIGN ON REQUEST</div>
          <div className={css.cartContent}>
          <div className={css.cartList}></div>
            <div className={css.cartInfo}>
              <div className={css.cartInfoContent}>
                <div className={css.titleInfo}>Fill in the required information</div>
                <div className={css.address}>
                  <label>Theme</label><br/>
                  <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Birthday</option>
                        <option value="2">Baby’s 1st Birthday</option>
                        <option value="3">Wedding restaurant</option>
                    </select>
                </div>
                <div className={css.address}>
                  <label>Colors</label><br/>
                  <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Magenta</option>
                        <option value="2">Lavender</option>
                        <option value="3">Vermilion</option>
                        <option value="4">Black white</option>
                    </select>
                </div>
                <div className={css.nameFone}>
                  <div className={css.name}>
                    <span >Type flowers </span><br/>
                    <input type="text"  value ="Chrysanthemum"/>
                  </div>
                  <div className={css.name}>
                    <span></span><br/>
                    <input type="text" value="Rose"/>  
                  </div>
                </div>
                {/* <div>
                  <input type="checkbox" />
                  <span> Tạo tài khoản</span>
                </div> */}
                <div className={css.deliveryContainer}>
                  <div className={css.method}>
                    <span>Decorative leaves: </span>
                    <div className={css.cod}>                    
                      <input type="checkbox" />
                      <label>Thien mon</label>
                    </div>
                    <div className={css.cod}>
                      <input type="checkbox" />
                      <label htmlFor="">Trac banh diep</label>
                    </div>
                  </div>
                </div>
                <div className={css.deliveryContainer}>
                  <div className={css.method}>
                    <span>Accessories: </span>
                    <div className={css.cod}>                    
                      <input type="checkbox" />
                      <label>Ribbon</label>
                    </div>
                    <div className={css.cod}>
                      <input type="checkbox" />
                      <label htmlFor="">Wrapping paper</label>
                    </div>
                  </div>
                </div>
                <div className={css.note}>
                  <label htmlFor="">Note for Shop :</label><br/>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                {/* <button className={css.btnBook}>Đặt Hàng</button> */}
                <div className={css.totlaContainer}>
                  <div className={css.priceInfo}>
                    
                  </div>
                  <button className={css.btnOrder}>Send</button>
                </div>  
              </div>
            </div>
          </div>
        </div> 
    )
}

export default compose(withLayout, withRouter)(EditFlowerPage);