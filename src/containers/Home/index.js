import React, {Component} from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../../actions/getData';


import UserInfo from '../../components/UserInfo';
import UserFullInfo from '../../components/UserFullInfo';


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeUser: [],
            errorMassage:false,
            errorSearch:false,
            currentPage: 0,
            user: [],
            loaded: false,
            loading: false,
        }
    }
    componentDidMount() {
        // return this.props.fetchData('https://randomuser.me/api/?results=100');
        const data = this.initialData = this.mutateUsers();
        return data && this.setState({
            user: this.mutateUsers(),
            activeUser: data[0]
        })
    };

    mutateUsers = () => {
        const users = this.props.user && this.props.user.map((person, id) => ({
            name: person.name.first.charAt(0).toUpperCase() + person.name.first.slice(1) + ' '
            + person.name.last.charAt(0).toUpperCase() + person.name.last.slice(1),

            age: person.dob.age,
            phone: person.phone,
            avatar: person.picture.thumbnail,
            avatarLarge: person.picture.large,
            id: id,
            restInfo: {...person}
        }));
        return users
    };

    render(){
        return(
            <div className="home pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <aside className="sidebar">
                                {console.log(this.state.activeUser)}
                                {
                                    this.state.activeUser &&
                                    <UserInfo
                                        {...this.state.activeUser}
                                    />
                                }

                            </aside>

                        </div>
                        <div className="col-xl-9">
                            <main className="home__main">
                                <UserFullInfo
                                    {...this.state.activeUser}
                                />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => {
        // console.log(state.search.results)
        return({
            user: state.search.results,
        })
    },
    dispatch => ({
        fetchData: (url) => dispatch(usersFetchData(url))
    })
)(Home)