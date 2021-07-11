import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'assets/css/base.scss';
import SearchResultPage from 'containers/SearchResultPage';
import HomePage from 'containers/HomePage';
import CartPage from 'containers/CartPage/CartPage';
import PaymentPage from 'containers/PaymentPage/PaymentPage';
import DetailPage from 'containers/DetailPage/DetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/cart" component={CartPage}/>
        <Route exact path="/payment" component={PaymentPage}/>
        <Route exact path="/search" component={SearchResultPage} />
        <Route exact path="/detail/:id" component={DetailPage}/>
      </Switch>
    </Router>
  );
}

export default App;
