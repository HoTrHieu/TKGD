import React from 'react';
import 'assets/css/base.scss';
import Header from './Header';
import Footer from './Footer';

const withLayout = (Component) => (props) => {
  return (
    <div className="container-fluid">
      <Header/>
        <div style={{ width: '100vw', minHeight: '400px' }}>
          <Component {...props} />
        </div>
      <Footer/>
    </div>
  );
}

export default withLayout;
