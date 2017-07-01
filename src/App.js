import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.png';
import title from './title.png';
import './App.css';
import EventList from './components/eventlist.jsx';
import AddEvent from './components/addEvent.jsx';

export default (
      <Provider store={store}>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={title} className="App-title-pic" alt="home" />
          <div className="App-body">          
            <AddEvent />
            
          </div>
          <div>
            <EventList />
          </div>
        </div>        
      </Provider>
    )
