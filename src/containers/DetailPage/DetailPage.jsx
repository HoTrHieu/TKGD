import React, { useEffect, useState, useContext } from "react";
import css from "./DetailPage.module.scss";
import withLayout from "components/Layout";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import StarIcon from "assets/images/products/star.png";
import rangtingStarIcon from "assets/images/products/rangtingStar.png";

import {
  getProductById,
  addFavoriteList,
  getFavoriteList,
  deleteFavoriteItem,
  addCart,
  getRelatedList,
} from "./../../utils/api.js";
import { formatMoney } from './../../utils/helper';

const DetailPage = (props) => {
  const { history } = props;
  const { id } = props.match.params || {};
  const [product, setProduct] = useState(null);
  const [listFavorite, setListFavorite] = useState([]);
  const [listRelateds, setListRelateds] = useState([]);
  const [productCart, setProductCart] = useState({
    id: Number(id),
    size: "small",
    quantity: 1,
  });

  const loadFavoriteList = () => {
    getFavoriteList().then((res) => {
      if (res.data) {
        setListFavorite(res.data);
      }
    });
  };

  useEffect(() => {
    getProductById(id).then((res) => {
      if (res) {
        setProduct(res.data);
      }
    });
    loadFavoriteList();
    getRelatedList().then((res) => {
      if (res.data) {
        setListRelateds(res.data);
      }
    });
  }, [id]);

  useEffect(() => {
    setProductCart({
      id: Number(id),
      size: "small",
      quantity: 1,
    });
  }, [id]);

  const isFavofite = listFavorite.findIndex(
    (item) => Number(item.id) === Number(id)
  );

  const changeSize = (size) => {
    setProductCart({
      ...productCart,
      size: size,
    });
  };

  const changeQuantity = (type) => {
    const origin = productCart.quantity;
    if (type === "-") {
      const newQuantity = origin === 1 ? 1 : origin - 1;
      setProductCart({
        ...productCart,
        quantity: newQuantity,
      });
    } else {
      const newQuantity = origin === 5 ? 5 : origin + 1;
      setProductCart({
        ...productCart,
        quantity: newQuantity,
      });
    }
  };

  const addToFavorite = () => {
    const indexExit = listFavorite.findIndex((item) => (item.id = product.id));
    if (indexExit < 0) {
      addFavoriteList(product).then((res) => {
        loadFavoriteList();
      });
    } else {
      deleteFavoriteItem(product.id).then((res) => {
        loadFavoriteList();
      });
    }
  };

  const addToCard = () => {
    addCart(productCart);
  };

  return (
    <div className={css.detailContainer}>
      <div className={css.subMenu}>
        <ul>
          <li>PRODUCT DETAILS</li>
          <li>DESCRIPTION</li>
          <li>REVIEW</li>
          <li>Q & A</li>
        </ul>
      </div>

      {product && (
        <>
          <div className={css.deatailInfo}>
            <div className={css.info}>
              <img src={product.imgSrc} alt="" />
              <div className={css.detailContent}>
                <p className={css.title}>{product.name}</p>
                {[0, 1, 2, 3, 4].map((star) =>
                  star < product.rangting ? (
                    <img
                      key={star}
                      className={css.ratingstar}
                      alt="star"
                      src={rangtingStarIcon}
                    />
                  ) : (
                    <img
                      key={star}
                      className={css.ratingstar}
                      alt="star"
                      src={StarIcon}
                    />
                  )
                )}
                <p className={css.price}>{formatMoney(product.price)} VND</p>
                <div className={css.breakLine}></div>
                <p className={css.sizeTitle}>Size:</p>
                <div className={css.listSize}>
                  <div
                    onClick={() => changeSize("small")}
                    className={classNames(css.boxType, {
                      [css.choonse]: productCart.size === "small",
                    })}
                  >
                    small
                  </div>
                  <div
                    onClick={() => changeSize("medium")}
                    className={classNames(css.boxType, {
                      [css.choonse]: productCart.size === "medium",
                    })}
                  >
                    medium
                  </div>
                  <div
                    onClick={() => changeSize("big")}
                    className={classNames(css.boxType, {
                      [css.choonse]: productCart.size === "big",
                    })}
                  >
                    big
                  </div>
                </div>
                <p className={css.quantity}>Qauntity:</p>
                <div className={css.quantityContainer}>
                  <div
                    onClick={() => changeQuantity("-")}
                    className={css.substrac}
                  >
                    -
                  </div>
                  <div className={css.number}>{productCart.quantity}</div>
                  <div onClick={() => changeQuantity("+")} className={css.add}>
                    +
                  </div>
                </div>
                <div className={css.cardContainer}>
                  <div onClick={() => addToCard()} className={css.card}>
                    ADD TO CART
                  </div>
                  <div onClick={() => addToFavorite()} className={css.favorite}>
                    <div
                      className={
                        isFavofite > -1 ? css.likeIconOn : css.likeIcon
                      }
                    ></div>
                    add to favorite list
                  </div>
                </div>
              </div>
            </div>
            <div className={css.related}>
              <p className={css.lable}>related products</p>
              <div className={css.relatedList}>
                {listRelateds.map((item) => {
                  return (
                    <div className={css.relatedItem}>
                      <div className={css.title}>
                        <p className={css.name}>{item.name}</p>
                        <p className={css.price}>{formatMoney(item.price)} VND</p>
                      </div>
                      <img
                        onClick={() => history.push(`/detail/${item.id}`)}
                        src={item.imgSrc}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={css.description}>
            <p className={css.title}>DESCRIPTION</p>
            <div className={css.content}>{product.description}</div>
          </div>

          <div className={css.review}>
            <p className={css.title}>REVIEW</p>
            <div className={css.content}>
              {product.review.map((item) => {
                return (
                  <div className={css.item}>
                    <span className={css.name}>{item.nameUser}: </span>
                    <span className={css.comment}>{item.content}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={css.questionAnswer}>
            <p className={css.title}>Q & A</p>
            <div className={css.content}>
              {product.qa.map((item) => {
                return (
                  <div className={css.item}>
                    <p className={css.question}>Q: {item.question}</p>
                    <p className={css.answer}>A: {item.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default compose(withLayout, withRouter)(DetailPage);
