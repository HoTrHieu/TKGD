import React, {useContext, useState, useEffect} from 'react';
import css from './PaymentPage.module.css'
import withLayout from 'components/Layout';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import { 
  getCartList,
  getAllProduct,
  addPayment,
  clearCart,
} from './../../utils/api';
import { formatMoney, currency } from './../../utils/helper';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import classNames from 'classnames';

const PaymentPage = props => {
  const [listCard, setListCard] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
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

  const onSubmitForm = (data) => {
    const dataValue = {
      ...data,
      listCart: [
        ...listCard
      ]
    }

    addPayment(dataValue).then(res => {
      setIsOpen(true);
    })
  }
  
  const closeModal = () => {
    clearCart();
    setIsOpen(false);
    props.history.push('/');
  }
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '150px',
      margin: '0 auto'
    },
  };

  //Modal.setAppElement('.selector');

    return (
        <div className={classNames( "selector", css.cartContainer)}>
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
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className={css.nameFone}>
                    <div className={css.name}>
                      <span >Name: </span><br/>
                      <input type="text" {...register("name", { required: true })}/>
                      {errors.name && <p className={css.errorText}>This field is required</p>}

                    </div>
                    <div className={css.phone}>
                      <span>Phone:</span><br/>
                      <input type="text" {...register("phone", { required: true, pattern: /[0-9]{10}/ })}/>  
                      {errors.phone && <p className={css.errorText}>Required or not a number</p>}
                    </div>
                  </div>
                  <div className={css.address}>
                    <label>Address:</label><br/>
                    <input type="text" {...register("address", { required: true })}/>  
                    {errors.address && <p className={css.errorText}>This field is required</p>}
                  </div>
                  <div className={css.note}>
                    <label htmlFor="">Note</label><br/>
                    <textarea name="" id="" cols="30" rows="10" {...register("note", { required: false })}></textarea>
                  </div>
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
                        <input type="radio" {...register("method", { required: true })} value="cod"/>
                        <label>COD</label>
                        {errors.method && <span className={css.errorText}>*</span>}
                      </div>
                      <div className={css.bank}>
                        <input type="radio" {...register("method", { required: true })} value="bank"/>
                        <label htmlFor="">Bank transfer</label>
                        {errors.method && <span className={css.errorText}>*</span>}
                      </div>
                    </div>
                  </div>
                  <div className={css.totlaContainer}>
                    <div className={css.priceInfo}>
                      <span>Total price: <span className={css.price}>{formatMoney(totalPrice)}&nbsp;{currency}</span></span>
                    </div>
                    <button type="submit" className={css.btnOrder}>COMFIRM</button>
                  </div>  
                </form>
              </div>
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            style={customStyles}
          >
            <div className={css.modalCustom}>
              <p className={css.titleModal}>Payment Success</p>
              <div className={css.wrapbutton}>
                <button className={css.btnClose} onClick={() => closeModal()}>Close</button>
              </div>
            </div>

          </Modal>
        </div> 
      );
};

export default compose(withLayout, withRouter)(PaymentPage);