import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './containers/Home'
import Fiends from './containers/Friends';
import AddFriends from './containers/AddFriends';

class App extends Component {

  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/" component={Fiends}/>
                <Route path="/addfriends" component={AddFriends}/>
            </div>
        </Router>
    );
  }
}

export default App;
