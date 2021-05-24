import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import LikeIcon from 'assets/images/header/like.png';
import DeliveryIcon from 'assets/images/header/delivery.png';
import GoodCSIcon from 'assets/images/header/good-cs.png';
import CouponIcon from 'assets/images/header/coupon.png';

const Header = (props) => {
  const params = props.match.params;
  const [keySearch, setKeySearch] = useState(params.word);
  const history = useHistory();
  const handleSearch = () => {
      history.replace(`/search/${keySearch}`);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <header className="header-wrapper">
      <div className="navbar">
        <ul className="left">
          <li>PRODUCTS</li>
          <li>CONTACT</li>
          <li>BLOG</li>
        </ul>
        <div className="logo">
          <h1>Floral</h1>
          <div className="logo-image"/>
        </div>
        <ul className="right">
          <input id="search" value={keySearch} onChange={e => setKeySearch(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search" />
          <li className="search-icon divide" onClick={handleSearch} />
          <li className="user-icon divide" />
          <li className="like-icon divide" />
          <li className="cart-icon" />
        </ul>
      </div>
      <div className="categories">
        <ul className="left">
          <li>Hoa Sinh Nhật</li>
          <li>Hoa Chúc Mừng</li>
          <li>Hoa Khai Trương</li>
          <li>Hoa Cưới</li>
          <li>Hoa Tình Yêu</li>
        </ul>
        <ul className="right">
          <div className="logo-vn"/>
          <p>VN (vnd)</p>
        </ul>
      </div>
      <div className="services">
        <ul>
          <li>
            <img alt="" src={LikeIcon} />
            100% Quality Products
          </li>
          <li>
            <img alt="" src={DeliveryIcon} />
            Instant delivery
          </li>
          <li>
            <img alt="" src={GoodCSIcon} />
            Good customer-service
          </li>
          
          <li>
            <img alt="" src={CouponIcon} />
            Numerous VIP discount
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;