import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import * as firebase from 'firebase'
import './index.css';
import './App.css';

import BlogPage from './containers/blog-page';
import HomePage from './pages/home';
import Portfolio from './pages/portfolio';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const config = {
    apiKey: "AIzaSyBsGTZPjfYL7X44R_wNrTb3mwL8YS32Tjg",
    authDomain: "mabloq-blog.firebaseapp.com",
    databaseURL: "https://mabloq-blog.firebaseio.com",
    projectId: "mabloq-blog",
    storageBucket: "mabloq-blog.appspot.com",
    messagingSenderId: "819781871615"
  };
  firebase.initializeApp(config);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/blog" component={BlogPage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
