import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import {store} from './store/store'
import './styles/login.css'
import Search from './components/Search';
import App from './components/App';





ReactDOM.render(
  <Provider store={store}>
  {/* <AppRouter /> */}
 <App />
 
  
</Provider>,
  document.getElementById('root')
);


