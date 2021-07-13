import React, { useState } from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";
import queryString from 'query-string'
import LikeIcon from 'assets/images/header/like.png';
import DeliveryIcon from 'assets/images/header/delivery.png';
import GoodCSIcon from 'assets/images/header/good-cs.png';
import CouponIcon from 'assets/images/header/coupon.png';
import { currency, keySearch } from './../../utils/helper';

const Header = () => {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const [keyWord, setKeyWord] = useState(values.keyWord || "");
  const history = useHistory();


  const handleSearch = () => {
    const curKeySearch = values.keySearch || '';
    if(curKeySearch === '') {
      history.push(`/search?keyWord=${keyWord}`);
    }else {
      history.push(`/search?keySearch=${curKeySearch}&keyWord=${keyWord}`);
    }
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  const handleKeyWord = (key) => {
    const curKeyWord = values.keyWord || '';
    if(curKeyWord === '') {
      history.push(`/search?keySearch=${key}`)
    }else {
      history.push(`/search?keySearch=${key}&keyWord=${keyWord}`);
    }
  }

  return (
    <header className="header-wrapper">
      <div className="navbar">
        <ul className="left">
          <li>PRODUCTS</li>
          <li style={{width: '60px'}}></li>
          <li style={{width: '60px'}}></li>
          {/* <li>CONTACT</li>
          <li>BLOG</li> */}
        </ul>
        <div className="logo">
          <Link to="/" style={{textDecoration: "none"}}>
            <h1>Floral</h1>
          </Link>
          <div className="logo-image"/>
        </div>
        <ul className="right">
          <input id="search" value={keyWord} onChange={e => setKeyWord(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search" />
          <li className="search-icon divide" onClick={handleSearch} />
          <li onClick={() => history.push('/profile')} className="user-icon divide" />
          <li onClick={() => history.push('/search?favorite=true')} className="like-icon divide" />
          <Link to="/cart"><li className="cart-icon"/></Link>
        </ul>
      </div>
      <div className="categories">
        <ul className="left">
          <li onClick ={() => handleKeyWord(keySearch.BDF)}>Birthday Flowers</li>
          <li onClick ={() => handleKeyWord(keySearch.CON)}>Congratulation Flowers</li>
          <li onClick ={() => handleKeyWord(keySearch.GOF)} >Grand Opening Flower</li>
          <li onClick ={() => handleKeyWord(keySearch.TWF)}>The Wedding Flowers</li>
          <li onClick ={() => handleKeyWord(keySearch.LUF)}>Love Flower</li>
          <li onClick={() => history.push('/editflower')}>Floral Design</li>
        </ul>
        <ul className="right">
          <div className="logo-vn"/>
          <p>VN ({currency})</p>
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