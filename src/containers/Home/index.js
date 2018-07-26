import React, {Component} from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../../actions/getData';


import UserInfo from '../../components/UserInfo';


class Home extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.props.fetchData('https://randomuser.me/api/?results=1');
    }

    render(){
        return(
            <div className="home pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <aside className="sidebar">
                                {
                                    this.props.user &&
                                        this.props.user.map((item, id) => {
                                            return <UserInfo
                                                key={id}
                                                {...item}
                                            />
                                        })
                                }
                            </aside>
                        </div>
                        <div className="col-xl-9">
                            <main className="home__main">
                                home__main
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.users.results,
        hasErrored: state.usersHasErrored,
        isLoading: state.usersIsLoading
    }),
    dispatch => ({
        fetchData: (url) => dispatch(usersFetchData(url))
    })
)(Home)