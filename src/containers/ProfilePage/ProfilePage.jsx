import React, { useContext, useState } from "react";
import css from "./ProfilePage.module.css";
import withLayout from "components/Layout";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import classNames from 'classnames';
import { addUser, getUser } from './../../utils/api';

const ProfilePage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmitForm = (data) => {
    addUser(data).then(res => {
      setIsOpen(true)
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

  const closeModal = () => {
    setIsOpen(false);
    props.history.push('/');
  }

  return (
    <div className={css.cartContainer}>
      <div>
        <div className={css.cartTitle}>HỒ TRUNG HIẾU</div>
        <div className={css.cartInfo2}>
          {/* <div className={css.cartTitle2} >Account information</div>
                  <div className={css.cartTitle2} >Order tracking</div> */}
          <div className={css.cartTitle2}>Log out</div>
        </div>

      </div>

      <div className={css.cartContent}>
        <div className={css.cartInfo}>
          <div className={css.cartInfoContent}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div className={css.text}>
                <span>Name</span>
                <div className={css.name}>
                  <input type="text" {...register("name", { required: true })}/>
                  {errors.name && <p className={css.errorText}>This field is required</p>}
                </div>
              </div>

              <div className={css.text}>
                <span>Phone</span>
                <div className={css.name}>
                  <input type="text" {...register("phone", { required: true, pattern: /[0-9]{10}/ })}/>  
                  {errors.phone && <p className={css.errorText}>Required or not a number</p>}
                </div>
              </div>

              <div className={css.text}>
                <span>Email</span>
                <div className={css.name}>
                  <input type="email" {...register("email", { required: true })}/>  
                  {errors.email && <p className={css.errorText}>This field is required</p>}
                </div>
              </div>

              <div className={css.text}>
                <span>Gender</span>
                <div className={css.male}>
                  <input type="radio" {...register("gender", { required: true })} value="male"/>
                  <label>Male</label>
                  {errors.gender && <span className={css.errorText}>*</span>}
                </div>
                <div className={css.female}>
                  <input type="radio" {...register("gender", { required: true })} value="female"/>
                  <label htmlFor="">Female</label>
                  {errors.gender && <span className={css.errorText}>*</span>}
                </div>
              </div>

              <div className={css.text}>
                <label>Birthday</label>
                <br />
                <div className={css.name}>
                  <input type="date" {...register("birthday", { required: true })}/>
                  {errors.birthday && <p className={css.errorText}>This field is required</p>}
                </div>
              </div>

              <div className={css.totlaContainer}>
                <button className={css.btnOrder}>COMFIRM</button>
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

export default compose(withLayout, withRouter)(ProfilePage);
