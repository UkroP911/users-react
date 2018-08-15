import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import withAuthorization from '../../components/withAuthorization';
import {db} from "../../firebase";
import rootAction from '../../actions';


import UserInfo from '../../components/UserInfo';
import UserList from '../../components/UserList';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';



class Friends extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeUser: [],
            errorMassage:false,
            errorSearch:false,
            currentPage: 0,
        };
        this.sortType = {
            dob: true,
            name: true
        };
    }
    componentDidMount() {
        const {onSetUsers} = this.props;
        db.onceGetUsers()
            .then(snapshot =>
                    onSetUsers(snapshot.val()));
    }

    toUppercase = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    };

    updateApp = (config) => {
        this.setState(config);
        this.props.onSortUsers(config);
    };

    onActiveUser = (user) => {
        this.props.onActiveUser(user);
    };

    search = (e) => {
        const value = e.target.value.toLowerCase();
        const filter = this.props.initialData.filter( user => user.name.first.toLowerCase().includes(value) || user.name.last.toLowerCase().includes(value));

        this.updateApp({
            currentPage: 0
        });
        this.props.onSearchUser(filter);

        if(filter.length > 0){
            this.setState({
                errorSearch: false
            })
        } else {
            this.setState({
                errorSearch: true
            })
        }
    };

    sort = (type) => {
        const { users } = this.props;
        const isSorted = this.sortType[type];
        let direction = isSorted ? 1 : -1;

        const sorted = users.slice().sort((a,b) => {
            const nameA = a[type].first + ' ' + a[type].last;
            const nameB = b[type].first + ' ' + b[type].last;

            const ageA = a[type].age;
            const ageB = b[type].age;

            if(type === 'name'){
                return a[type] === b[type] ? 0 : nameA > nameB ? direction : direction * -1;
            } else {
                return a[type] === b[type] ? 0 : ageA > ageB ? direction : direction * -1;
            }
        });

        this.updateApp([...sorted]);
        this.sortType[type] = !isSorted;
    };

    reset = () => {
        this.updateApp(this.props.initialData)
    };

    splitUsers = (users) => {
        return users.slice(this.state.currentPage * 8, this.state.currentPage * 8 + 8);
    };

    handlePagination = (number) => {
        const current = this.state.currentPage;
        if(current + number >= 0 && current + number < Math.ceil(this.props.users.length / 8)){
            this.setState(prev => {
                return ({
                    currentPage: prev.currentPage + number
                })
            })
        }
    };

    render(){
        const { users } = this.props;
        const splitData = users[0] ? this.splitUsers(users) : '';
        const colPages = users[0] ? Math.ceil(users.length / 8) : 0;
        console.log(users)
        return(
            <div className="friends">
                <div className="friends__content pt-3">
                    <div className="container">
                        <div className="row">
                            {this.props.activeUser
                                ?
                                <div className="col">
                                    <aside className="sidebar pt-5">
                                        <UserInfo
                                            activeUser={this.props.activeUser}
                                        />
                                    </aside>
                                </div>
                                :
                                null
                            }
                            <div className={this.props.activeUser ? 'col-xl-9' : 'col-xl-12'}>
                                <main className="friends__main">
                                    <div className="row">
                                        <Search
                                            search={this.search.bind(this)}
                                            isError={this.state.errorSearch}
                                        />
                                        <Filter
                                            sort={this.sort}
                                            reset={this.reset}
                                        />
                                    </div>
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            {/*<th>№</th>*/}
                                            <th scope="col">Avatar</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Phone</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {splitData !== '' ?
                                            splitData.map((person, index) => {
                                                const name = this.toUppercase(person.name.first) + ' ' + this.toUppercase(person.name.last);
                                                const {phone} = person;
                                                const {age} = person.dob;
                                                const {picture} = person;
                                                let users = {
                                                    name,
                                                    phone,
                                                    age,
                                                    picture
                                                };
                                                return <UserList
                                                    key={index}
                                                    {...users}
                                                    onActiveUser={this.onActiveUser}
                                                />
                                            }) :
                                            <tr>
                                                <td>Loading...</td>
                                            </tr>
                                        }
                                        </tbody>
                                    </table>
                                        <Pagination
                                            colPages={colPages}
                                            currentPage={this.state.currentPage}
                                            handlePagination={this.handlePagination}
                                        />
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.userState.users,
        initialData: state.userState.initialData,
        activeUser: state.userState.activeUser
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSetUsers: (users) => dispatch (rootAction.setUsers(users)),
    onSortUsers: (users) => dispatch(rootAction.sortUser(users)),
    onActiveUser: (user) => dispatch(rootAction.activeUser(user)),
    onSearchUser: (users) => dispatch(rootAction.searchUser(users))
});

const authCondition = (authUser) => !!authUser;


export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps, mapDispatchToProps)
)(Friends);