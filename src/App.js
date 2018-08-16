import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import Navigation from './containers/Navigation'
import Home from './containers/Home'
import Fiends from './containers/Friends';
import AddFriends from './containers/AddFriends';
import Login from './containers/Login';
import ChangePassword from './containers/ChangePassword';
import SignUp from './containers/SignUp';
import MainPage from './containers/MainPage';
import Footer from './containers/Footer';

import * as routes from './constants/routes'

import withAuthentication from './components/withAuthentication';

class App extends Component {
    render() {
        return (
            <Router >
                <div className="App" style={{paddingBottom: '80px'}}>
                    <Navigation />
                    <Route exact path={routes.FRIENDS} component={Fiends}/>
                    <Route exact path={routes.SIGN_IN} component={Login}/>
                    <Route exact path={routes.HOME} component={Home} />
                    <Route exact path={routes.ACCOUNT} component={ChangePassword}/>
                    <Route exact path={routes.SIGN_UP} component={SignUp}/>
                    <Route exact path={routes.LANDING} component={MainPage}/>
                    {/*<Route exact path={routes.ADD_FRIENDS} component={AddFriends}/>*/}

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default withAuthentication(App);
