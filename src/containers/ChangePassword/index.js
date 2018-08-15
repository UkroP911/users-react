import React, { Component } from 'react';

import {auth} from "../../firebase";

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component{
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { passwordOne } = this.state;
        auth.doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    };

    render(){
        const {
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return(
            <div className="container">
                <h1 className="pt-5">Reset Password</h1>
                <div className="row justify-content-center">
                    <form
                        className="justifu-content-center d-flex flex-column pt-5"
                        onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                className="form-control"
                                value={passwordOne}
                                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                type="password"
                                placeholder="New Password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                className="form-control mb-1"
                                value={passwordTwo}
                                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                type="password"
                                placeholder="Confirm New Password"
                            />
                        </div>
                        <button
                            className="btn btn-primary d-block mx-auto"
                            disabled={isInvalid} type="submit">
                            Reset My Password
                        </button>
                        { error && <p>{error.message}</p> }
                    </form>
                </div>
            </div>

        )
    }
}

export default PasswordChangeForm;