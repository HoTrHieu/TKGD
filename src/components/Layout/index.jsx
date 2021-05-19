import React from 'react';
import 'assets/css/base.scss';
import Header from './Header';
import Footer from './Footer';

const App = (props) => {
  const { children } = props;
  return (
    <div className="container-fluid">
      <Header/>
        <div style={{ width: '100vw', minHeight: '400px' }}>
          {children}
        </div>
      <Footer/>
    </div>
  );
}

export default App;
