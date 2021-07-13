import React, {useContext, useState} from 'react';
import css from './EditFlowerPage.module.css'
import withLayout from 'components/Layout';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import classNames from 'classnames';
import {addDesign} from './../../utils/api';

const EditFlowerPage = props=> {
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const closeModal = () => {
    setIsOpen(false);
    props.history.push('/');
  }

  const onSubmitForm = (data) => {
    addDesign(data).then(res => {
      setIsOpen(true);
    })
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

    return (
        <div className={css.cartContainer}>
          <div className={css.cartTitle}>FLOWERS DESIGN ON REQUEST</div>
          <div className={css.cartContent}>
          <div className={css.cartList}></div>
            <div className={css.cartInfo}>
              <div className={css.cartInfoContent}>
                <div className={css.titleInfo}>Fill in the required information</div>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className={css.nameFone}>
                    <div className={css.name}>
                      <span >Name </span><br/>
                      <input type="text" {...register("name", { required: true })}/>
                      {errors.name && <p className={css.errorText}>This field is required</p>}
                    </div>
                    <div className={css.name}>
                      <span>Phone</span><br/>
                      <input type="text" {...register("phone", { required: true, pattern: /[0-9]{10}/ })}/>  
                      {errors.phone && <p className={css.errorText}>Required or not a number</p>}
                    </div>
                  </div>
                  
                  <div className={css.address}>
                    <label>Theme</label><br/>
                    <select {...register("theme", { required: true })} class="form-select" aria-label="Default select example">
                      <option disabled>Open this select menu</option>
                      <option value="birthday" selected>Birthday</option>
                      <option value="congrats">Congrats</option>
                      <option value="opening">Opening</option>
                      <option value="wedding">Wedding</option>
                      <option value="love">Love</option>
                    </select>
                    {errors.theme && <p className={css.errorText}>This field is required</p>}
                  </div>
                  <div className={css.address}>
                    <label>Colors</label><br/>
                    <select {...register("color", { required: true })} class="form-select" aria-label="Default select example">
                        <option disabled>Open this select menu</option>
                        <option selected value="magenta">Magenta</option>
                        <option value="lavender">Lavender</option>
                        <option value="vermilion">Vermilion</option>
                        <option value="black_white">Black white</option>
                    </select>
                    {errors.color && <p className={css.errorText}>This field is required</p>}
                  </div>
                  <div className={css.nameFone}>
                    <div className={css.typeFlower}>
                      <span >Type flowers </span><br/>
                      <input {...register("flowers", { required: true })} type="text"/>
                      {errors.flowers && <p className={css.errorText}>This field is required</p>}
                    </div>
                  </div>
                  <div className={css.deliveryContainer}>
                    <div className={css.method}>
                      <span>Decorative leaves: </span>
                      <div className={css.cod}>                    
                        <input type="checkbox" {...register("leaves1", { required: false })} value="Tianmen flower"/>
                        <label>Tianmen flower</label>
                      </div>
                      <div className={css.cod}>
                        <input type="checkbox" {...register("leaves2", { required: false })} value="Biota orientalis" />
                        <label htmlFor="">Biota orientalis</label>
                      </div>
                    </div>
                  </div>
                  <div className={css.deliveryContainer}>
                    <div className={css.method}>
                      <span>Accessories: </span>
                      <div className={css.cod}>                    
                        <input type="checkbox" {...register("accessories1", { required: false })} value="ribbon" />
                        <label>Ribbon</label>
                      </div>
                      <div className={css.cod}>
                        <input type="checkbox" {...register("accessories2", { required: false })} value="paper"/>
                        <label htmlFor="">Wrapping paper</label>
                      </div>
                    </div>
                  </div>
                  <div className={css.note}>
                    <label htmlFor="">Note for Shop :</label><br/>
                    <textarea name="" id="" cols="30" rows="10" {...register("note", { required: false })}></textarea>
                  </div>
                  {/* <button className={css.btnBook}>Đặt Hàng</button> */}
                  <div className={css.totlaContainer}>
                    <div className={css.priceInfo}>
                      
                    </div>
                    <button className={css.btnOrder}>Send</button>
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
              <p className={css.titleModal}>Request Success</p>
              <div className={css.wrapbutton}>
                <button className={css.btnClose} onClick={() => closeModal()}>Close</button>
              </div>
            </div>

          </Modal>
        </div> 
    )
}

export default compose(withLayout, withRouter)(EditFlowerPage);