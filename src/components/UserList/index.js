import React from 'react';

export default (props) =>
        <tr
            style={{cursor: 'pointer'}}
            onClick={() => props.readOnly ? '' : props.updateApp({activeUser: props})}
        >
            {/*<td>{props.id ? props.id + 1 : props.index +1}</td>*/}
            {props.avatar ? <td scope="row"><img src={props.avatar} alt=""/></td> : null}
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.phone}</td>
        </tr>
