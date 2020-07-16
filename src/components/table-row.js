import React from 'react';
import BucketIcon from './bucket-icon';

export default function Row({user}) {
    return (
        <tr className={"users-table__row"}>
            <td className={"users-table__cell"}><img className={"users-table__avatar"} src={user.avatar}/></td>
            <td className={"users-table__cell"}>{user.fullName}</td>
            <td className={"users-table__cell"}>{user.speciality}</td>
            <td className={"users-table__cell"}>{user.groupName}</td>
            <td className={"users-table__cell"}>{user.age}</td>
            <td className={"users-table__cell"}>{user.rating}</td>
            <td className={"users-table__cell"}><div  className={"users-table__color"} style={{background: user.color}}/></td>
            <td className={"users-table__cell"}><BucketIcon/></td>
        </tr>
    )
}
