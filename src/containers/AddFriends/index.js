import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as C from '../../constants';

// import Modal from '../../components/Modal'
import UserList from '../../components/UserList';

class AddFriends extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            friends: [],
            value: '',
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    }
    handleChange(event) {
        // this.setState({
        //     value: event.target.value
        // });


    }
    handleSubmit(event){
        console.log(this)
        event.preventDefault();
        this.addFriendModal(this.nameInput.value, this.ageInput.value, this.phoneInput.value);
        this.nameInput.value='';
        this.ageInput.value='';
        this.phoneInput.value='';

    }

    addFriendModal = (name, age, phone) => {
        this.props.addFriend(name, age, phone)
    };




    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-info mx-auto d-block my-5"
                    style={{width: 200}}
                    onClick={() => this.setState({
                        show: true
                    })}
                >
                    Add friends
                </button>

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
                    {
                        this.props.friends.map((person, index) => {
                            return(
                                <UserList
                                    key={index}
                                    {...person}
                                    index={index}
                                    readOnly={true}
                                    // updateApp={this.updateApp}
                                />

                            )
                        })
                    }
                        </tbody>
                    </table>
                {
                    this.state.show &&
                    <div className="fixed-top" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={this.handleHide}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <form onSubmit={e => {
                                        e.preventDefault();
                                        this.addFriendModal(this.nameInput.value, this.ageInput.value, this.phoneInput.value);
                                        this.nameInput.value='';
                                        this.ageInput.value='';
                                        this.phoneInput.value='';
                                        this.handleHide();
                                        }
                                    }>


                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" placeholder="Name"
                                                   // onChange={onInputChange}
                                                // value={stateValue}
                                                   ref={input => this.nameInput = input}
                                            >
                                            </input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Age</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" placeholder="Age"
                                                   // onChange={onInputChange}
                                                // value={stateValue}
                                                   ref={input => this.ageInput = input}>
                                            </input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Phone</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" placeholder="Phone"
                                                   // onChange={onInputChange}
                                                // value={stateValue}
                                                   ref={input => this.phoneInput = input}>
                                            </input>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-dismiss="modal"
                                                onClick={this.handleHide}
                                            >Close</button>
                                            <input type="submit" className="btn btn-primary" value="Save changes"
                                            >

                                            </input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>


        );
    }
}

export default connect(
    state => ({
        friends: state.friends,
    }),
    dispatch => ({
        addFriend: (friendName, friendAge, friendPhone) =>
            dispatch(
                {
                    type: C.ADD_FRIEND,
                    friendName: friendName,
                    friendAge: friendAge,
                    friendPhone: friendPhone,
                }
            )
    })
)(AddFriends);