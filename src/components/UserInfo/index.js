import React from 'react';

export default (props) => {
    const user = props.activeUser ? props.activeUser : '';
    return(
        <div className="user__info">
            {/*{console.log(props)}*/}
            {/*<div className="user__avatar mb-4">*/}
                {/*<img className="img-thumbnail d-block" src={props.picture.large} alt=""/>*/}
            {/*</div>*/}
            {/*<div className="user__name">Name: <span className="text-danger">{props.name.first + ' ' + props.name.last}</span></div>*/}
            {/*<div className="user__age">Age: <span className="text-danger">{props.dob.age}</span></div>*/}
            {/*<div className="user__phone">Phone: <span className="text-danger">{props.phone}</span></div>*/}
        </div>
    )
}
