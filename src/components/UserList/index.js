import React from 'react';

export default (props) =>
        <tr
            style={{cursor: 'pointer'}}
            onClick={() => props.updateApp({activeUser: props})}
        >
            <td>{props.id + 1}</td>
            <td scope="row"><img src={props.avatar} alt=""/></td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.phone}</td>
        </tr>
