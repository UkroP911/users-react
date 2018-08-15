import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import * as routes from '../../constants/routes';
import {auth} from "../../firebase";
const Navigation = ({ authUser }) =>
    <header className="bg-dark">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    { authUser
                        ? <NavigationAuth />
                        : <NavigationNonAuth />
                    }
                </div>
            </nav>
        </div>
    </header>;

const NavigationAuth = () =>
    <div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" href="" to={routes.HOME}>Home</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" href="" to={routes.FRIENDS}>Friends</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="" to={routes.ACCOUNT}>Account</Link>
            </li>
        </ul>
        <SignOutButton />
    </div>;

const NavigationNonAuth = () =>
    <ul className="navbar-nav">
        <li className="nav-item ">
            <Link className="nav-link" href="" to={routes.LANDING}>Main</Link>
        </li>
        <li className="nav-item ">
            <Link className="nav-link" href="" to={routes.SIGN_IN}>Sign In</Link>
        </li>
    </ul>;

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

const SignOutButton = () =>
    <button
        className="btn btn-default"
        type="button"
        onClick={auth.doSignOut}
    >
        Sign Out
    </button>;

export default connect(mapStateToProps)(Navigation);