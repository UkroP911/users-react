import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './containers/Home'
import Fiends from './containers/Friends';

class App extends Component {

  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/" component={Fiends}/>
            </div>
        </Router>
    );
  }
}

export default App;
