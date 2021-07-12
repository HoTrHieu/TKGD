import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'assets/css/base.scss';
import SearchResultPage from 'containers/SearchResultPage';
import HomePage from 'containers/HomePage';
import CartPage from 'containers/CartPage/CartPage';
import PaymentPage from 'containers/PaymentPage/PaymentPage';
import DetailPage from 'containers/DetailPage/DetailPage';
import EditFlowerPage from 'containers/EditFlowerPage/EditFlowerPage';
import ProfilePage from 'containers/ProfilePage/ProfilePage';


import {CardProvider} from './cardContext';

function App() {
  const [listCard, updateListCard] = useState([]);
  const [listFavorite, updateListFavorite] = useState([]);
  const value = { listCard, updateListCard, listFavorite, updateListFavorite};

  return (
    <CardProvider value={value}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path="/cart" component={CartPage}/>
          <Route exact path="/payment" component={PaymentPage}/>
          <Route exact path="/search" component={SearchResultPage} />
          <Route exact path="/detail/:id" component={DetailPage}/>
          <Route exact path="/editflower" component={EditFlowerPage}/>
          <Route exact path="/profile" component={ProfilePage}/>
        </Switch>
      </Router>
    </CardProvider>
  );
}

export default App;
