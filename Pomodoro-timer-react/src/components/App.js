import React, { Component } from 'react';
import './App.css';
import Timer from './Pomodoro/Timer';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Timer />
            </div>
        );
    }
}

export default App;
