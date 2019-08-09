import React, {Component} from 'react';
import logo from "../assets/images/logo.svg";
import { Icon } from 'antd';

class TopNavBar extends Component {
    render() {
        return (
            <header className="App-header">
                <span className={"title"}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>NBA Players Info</span>
                </span>
                <a className={"about"} href={"https://github.com/zhl153/BasketballPlayers"}><Icon type="github" theme="filled" />{' '}About</a>
            </header>
        );
    }
}

export default TopNavBar;