const css = require('./scss/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'

import App from 'Components/app';

import BoxShadowReducer from 'Reducers/box-shadow';
import BoxRadiusReducer from 'Reducers/box-radius';
import TriangleReducer from 'Reducers/triangle';

const history = createHistory();
const middleware = routerMiddleware(history);

const reducer = combineReducers({
  boxShadow: BoxShadowReducer,
  boxRadius: BoxRadiusReducer,
  triangle: TriangleReducer,
  router: routerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(middleware)
)

window.store = store;
 
ReactDOM.render((
  <Provider store={store}>
     <ConnectedRouter history={history}>
        <App />
     </ConnectedRouter>
  </Provider>
), document.getElementById('app'))
