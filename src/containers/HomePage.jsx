import React, { useState, useEffect } from 'react';
import 'assets/css/base.scss';
import withLayout from 'components/Layout';
import BannerImg from 'assets/images/banner.png';
import { Category } from 'components/HomePage';
import { getAllProduct } from './../utils/api';

const HomePage = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getAllProduct().then(res => {
      if(res.data){
        setListData(res.data);
      }
    })
  }, [])

  return (
    <div className="homepage">
      <img className="homepage_banner" alt="banner" src={BannerImg}/>
      <Category products={listData} boldTitle="Newest" title="Products" />
    </div>
  );
}

export default withLayout(HomePage);
