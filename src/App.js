import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'assets/css/base.scss';
import SearchResultPage from 'containers/SearchResultPage';
import HomePage from 'containers/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search/:word" component={SearchResultPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
