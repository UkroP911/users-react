import React from 'react';

export default ({...props}) => {
    const users = props.activeUser ? props.activeUser : props;
    return(
        <div className="user__info">
            <div className="user__avatar mb-4 text-center">
                <img className="img-thumbnail" src={users.picture && users.picture.large} alt=""/>
                {/*{console.log(props)}*/}
            </div>
            <div className="user__name">Name: {users.name} <span className="text-danger"></span></div>
            <div className="user__age">Age: {users.age}<span className="text-danger"></span></div>
            <div className="user__phone">Phone: {users.phone}<span className="text-danger"></span></div>
        </div>
    )
}
