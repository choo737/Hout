import { Menu } from 'semantic-ui-react';
import React, { Component } from 'react';
import logo from '../logo.png';
import title from '../title.png';
import '../css/navbar.css';

export default class navbar extends Component {
    state = { activeItem: 'home' };

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name });
    }

    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <img src={title} className="App-title-pic" alt="home" />
                <Menu pointing secondary>
                    <Menu.Item name='home' active={this.state.activeItem !== 'home'} onClick={this.handleItemClick.bind(this)} />
                    <Menu.Item name='messages' active={this.state.activeItem !== 'messages'} onClick={this.handleItemClick.bind(this)} />
                    <Menu.Item name='friends' active={this.state.activeItem !== 'friends'} onClick={this.handleItemClick.bind(this)} />
                    <Menu.Menu position='right'>
                        <Menu.Item name='logout' active={this.state.activeItem !== 'logout'} onClick={this.handleItemClick.bind(this)} />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
