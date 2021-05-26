import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'assets/css/base.scss';
import SearchResultPage from 'containers/SearchResultPage';
import HomePage from 'containers/HomePage';
import CartPage from 'containers/CartPage/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/cart/:id" component={CartPage}/>
        <Route exact path="/search?key=word" component={SearchResultPage} />
      </Switch>
    </Router>
  );
}

export default App;
