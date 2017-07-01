import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Home from './pages/home.jsx';
import NavBar from './components/navbar.jsx';

export default (
  <Provider store={store}>
    <div className="App">
      <NavBar />
      <div className="App-body">
        {Home}
      </div>
    </div>
  </Provider>
)
