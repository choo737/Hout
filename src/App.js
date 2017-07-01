import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.png';
import title from './title.png';
import './App.css';

class App extends Component {
  state = { activeItem: 'home' }
  handleSelect = (selectedKey) => this.setState({ activeItem: selectedKey })

  render() {
    const { activeItem } = this.state
    return (
      <Provider store={store}>
        <div className="App">
          <table className="Nav-bar">
            <tr>
              <td width="10%">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={title} className="App-title-pic" alt="home" />
              </td>
              <td>
                <div className="App-header">

                </div>
              </td>
              <td>
                <Nav className="logout-menu" bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
                  <NavItem eventKey="logout" title="logout" disabled={activeItem === "logout"}>Logout</NavItem>
                </Nav>
              </td>
            </tr>
          </table>
          <div className="App-body">
            <br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
