import React, { Component } from 'react';
import '../styles/App.css';
import { Main } from './Main';
import TopNavBar from './TopNavBar';
import Foot from './Foot'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNavBar />
                {/*<TopBar/>*/}
                <Main/>
                <Foot/>
            </div>
        );
    }
}

export default App;
