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
        const users = this.props.user && this.props.user.map((person, id) => {
            const {name, dob, phone, picture, ...rest} = person;
            return ({
                name: name.first.charAt(0).toUpperCase() + name.first.slice(1) + ' '
                + name.last.charAt(0).toUpperCase() + name.last.slice(1),

                age: dob.age,
                phone: phone,
                avatar: picture.thumbnail,
                avatarLarge: picture.large,
                id: id,
                ...rest
            })
        });
        return users
    };

    toUpperCase(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    render(){
        return(
            <div className="home pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <aside className="sidebar">
                                {/*{console.log(this.props)}*/}
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
                                    toUpperCase={this.toUpperCase}
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