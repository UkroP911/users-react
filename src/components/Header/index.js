import React from 'react';
import {NavLink} from 'react-router-dom'

export default () =>
    <header className="bg-dark">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/*<li className="nav-item ">*/}
                            {/*<NavLink to="/" exact={true} activeClassName="active" className="nav-link" href="">Home <span className="sr-only">(current)</span></NavLink>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <NavLink to="/" exact={true} activeClassName="active" className="nav-link" href="">Friends</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/addfriends" activeClassName="active" className="nav-link" href="">Add friends</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>