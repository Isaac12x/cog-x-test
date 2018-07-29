import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

// Those two are high level components because either is the first to render
// or it's an error
import App from './App';
import ErrorPage from './ErrorPage';

const store = configureStore()


// Prefer to pass the store here so it's available in all the Routes
const Routes = (props) => (
  <Provider store={store}>
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  </Provider>
)

export default Routes;
