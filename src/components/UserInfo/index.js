import React from 'react';

export default (props) => {
    const user = props.activeUser ? props.activeUser : props;
    return(
        <div className="user__info">
            <div className="user__avatar mb-4">
                <img className="img-thumbnail d-block" src={user.avatarLarge} alt=""/>
            </div>
            <div className="user__name">Name: <span className="text-danger">{user.name}</span></div>
            <div className="user__age">Age: <span className="text-danger">{user.age}</span></div>
            <div className="user__phone">Phone: <span className="text-danger">{user.phone}</span></div>
        </div>
    )
}
