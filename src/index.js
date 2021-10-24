import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import {store} from './store/store'
import './styles/login.css'
import Search from './components/Search';





ReactDOM.render(
  <Provider store={store}>
  {/* <AppRouter /> */}
  <Search />
 
  
</Provider>,
  document.getElementById('root')
);


