import React, {useState} from 'react';
import 'assets/css/base.scss';
import Header from './Header';
import Footer from './Footer';
import {CardProvider} from './cardContext';

const withLayout = (Component) => (props) => {
  const [listCard, updateListCard] = useState([]);
  const [listFavorite, updateListFavorite] = useState([]);
  const value = { listCard, updateListCard, listFavorite, updateListFavorite};

  return (
    <CardProvider value={value}>
      <div className="container-fluid">
        <Header/>
          <div style={{ width: '100vw', minHeight: '400px' }}>
            <Component {...props}/>
          </div>
        <Footer/>
      </div>
    </CardProvider>
  );
}

export default withLayout;
