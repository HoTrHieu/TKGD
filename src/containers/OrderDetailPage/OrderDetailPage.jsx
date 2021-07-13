import React, {useContext} from 'react';
import css from './OrderDetailPage.module.css'
import withLayout from 'components/Layout';
import ShopImg from 'assets/images/cartPage/shopImg1.png';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import CardContext from '../../cardContext';
import { DATA_ALL } from '../../constants';

const OrderDetailPage = props => {
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
            <div className={css.cartTitle}>ORDER DETAILS</div>
            
            <div className={css.Hoz}>
                <div className={css.Hoz2}>
                    <span className={css.text}>Receiver's address</span>
                    <div className={css.cartInfo2}>
                        <div className={css.cartTitle2} >HO TRUNG HIEU</div>
                        <div className={css.cartTitle3} >Address: 135, Trần Hưng Đạo, Phường 1, Quận 1, HCM</div>
                        <div className={css.cartTitle3} >Phone: 0123456983</div>
                    </div>
                </div>         
                
                <div className={css.Hoz2}>
                <span className={css.text}>Delivery method</span>
                    <div className={css.cartInfo2}>
                        <div className={css.cartTitle3} >Delivered on Monday 07/12</div>
                        <div className={css.cartTitle3} >free ship</div>
                    </div>
                </div>
                
                <div className={css.Hoz2}> 
                    <span className={css.text}>Method of payments</span>
                    <div className={css.cartInfo2}>
                        <div className={css.cartTitle3} >Cash payment on delivery</div>
                    </div>
                </div>
                
            </div>
            <div className={css.cartContent}>
            <div className={css.cartInfo}>
              <div>
                
                                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantily</th>
                        <th scope="col">Sale</th>
                        <th scope="col">Status</th>
                        <th scope="col">Sum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                    </table>
                
              </div>
            </div>
          </div>
        </div> 
      );
};

export default compose(withLayout, withRouter)(OrderDetailPage);