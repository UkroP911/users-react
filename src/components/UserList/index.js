import React from 'react';

export default (props) =>
        <tr
            style={{cursor: 'pointer'}}
            onClick={() => props.readOnly ? '' : props.onActiveUser({activeUser: props})}
        >
            {/*{console.log('userlist', props)}*/}
            {/*{props.onActiveUser({activeUser: props})}*/}
            <td scope="row"><img alt="" src={props.picture.thumbnail}/></td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.phone}</td>
        </tr>
