import React, {Component} from 'react';
import { connect } from 'react-redux';
import { usersFetchData, searchData } from '../../actions/getData';

import UserInfo from '../../components/UserInfo';
import UserList from '../../components/UserList';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';


class Friends extends Component{
    constructor(props){
        super(props);
        this.sortType = {
            age: true,
            name: true
        };
        this.state = {
            activeUser: [],
            errorMassage:false,
            errorSearch:false,
            currentPage: 0,
            user: this.props.user,
            loaded: false,
            loading: false,
        }
    }

    componentDidMount() {
        return this.props.fetchData('https://randomuser.me/api/?results=100');

    };

    updateApp = (config) => {
        this.setState(config);
        if(config.activeUser){
            if(config.activeUser.index === this.state.activeUser.index){
                this.setState({
                    errorMassage: true
                })
            } else {
                this.setState({
                    errorMassage: true
                })
            }
        }
    };

    search = (e) => {
        const value = e.target.value.toLowerCase();

        const filter = this.props.user.filter( user => user.name.toLowerCase().includes(value) );
        // console.log('filter', filter)
        this.props.searchName(filter)

        this.updateApp({
            // user: filter,
            currentPage: 0
        });

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
        const user = this.props.user;
        const isSorted = this.sortType[type];
        let direction = isSorted ? 1 : -1;

        const sorted = user.slice().sort((a,b) => {
            return a[type] === b[type] ? 0 : a[type] > b[type] ? direction : direction * -1;
        });

        this.props.searchName(sorted)

        this.sortType[type] = !isSorted;
    };

    reset = () => {
        this.props.searchName(this.props.user)

        // this.updateApp({
        //     user: this.initialData,
        //     activeUser: this.initialData[0]
        // })

    };

    splitUsers = () => {
        return this.props.user &&
            this.props.user.slice(this.state.currentPage * 8, this.state.currentPage * 8 + 8);
    };

    handlePagination = (number) => {
        const current = this.state.currentPage;

        if(current + number >= 0 && current + number < Math.ceil(this.props.user.length / 8)){
            this.setState(prev => {
                return ({
                    currentPage: prev.currentPage + number
                })
            })
        }
    };

    render(){
        const {loading} = this.state;
        const splitData = this.splitUsers();
        const colPages = this.props.user ? Math.ceil(this.props.user.length / 8) : 0;

        return(
            <div className="friends">
                <div className="friends__content pt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <aside className="sidebar pt-5">
                                    <UserInfo
                                        activeUser={this.state.activeUser}
                                    />
                                    {/*{console.log('state', this.props.user)}*/}
                                </aside>
                            </div>
                            <div className="col-xl-9">
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
                                            <th>№</th>
                                            <th scope="col">Avatar</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Phone</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.props.isLoading ?
                                                <tr>
                                                    <td>Loading...</td>
                                                </tr>
                                                :
                                                splitData.map((person, index) => {
                                                    return <UserList
                                                        key={index}
                                                        index={index}
                                                        {...person}
                                                        updateApp={this.updateApp}
                                                    />
                                                })
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

export default connect(
    state => {
        return({
            user: state.users,
            hasErrored: state.usersHasErrored,
            isLoading: state.usersIsLoading
        })
    },
    dispatch => ({
        fetchData: (url) => (dispatch(usersFetchData(url))),
        searchName: (data) => (dispatch(searchData(data)))
    })
)(Friends)