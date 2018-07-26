import React from 'react';

export default (props) =>
        <tr
            style={{cursor: 'pointer'}}
            onClick={() => props.updateApp({activeUser: props})}
        >
            <td>{props.index + 1}</td>
            <td scope="row"><img src={props.picture.thumbnail} alt=""/></td>
            <td>{props.name.first + ' ' + props.name.last}</td>
            <td>{props.dob.age}</td>
            <td>{props.phone}</td>
        </tr>
