import React, {Component} from 'react';
import { connect } from 'react-redux';
import {compose} from 'recompose';


import UserInfo from '../../components/UserInfo';
import UserFullInfo from '../../components/UserFullInfo';

import withAuthorization from '../../components/withAuthorization';
import {db} from "../../firebase";
import rootAction from "../../actions";

class Home extends Component{
    componentDidMount() {
        const {onSetUsers} = this.props;
        db.onceGetUsers()
            .then(snapshot =>
                onSetUsers(snapshot.val()));
    }

    toUppercase = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    };

    getCurrentUserInfo(){
        const {authUser, users} = this.props;
        return users[0] ? users.filter(user => user.email === authUser.email) : []

    }

    commonInfo = () => {
        const [currentUser] = this.getCurrentUserInfo();
        if(currentUser){
            const name = this.toUppercase(currentUser.name.first) + ' ' + this.toUppercase(currentUser.name.last);
            const {phone} = currentUser;
            const {age} = currentUser.dob;
            const {picture} = currentUser;
            return {
                name,
                phone,
                age,
                picture
            };
        }
    };

    render(){
        return(
            <div className="home pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <aside className="sidebar">
                                    <UserInfo
                                        {...this.commonInfo()}

                                    />
                            </aside>
                        </div>
                        <div className="col-xl-9">
                            <main className="home__main">
                                {
                                    this.props.users[0] ?
                                        <UserFullInfo
                                            {...this.getCurrentUserInfo()[0]}
                                            upperCase={this.toUppercase}
                                        />
                                        : <div>Loading...</div>
                                }
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
    onSetUsers: (users) => dispatch (rootAction.setUsers(users)),
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps, mapDispatchToProps)
)(Home);
