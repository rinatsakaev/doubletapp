import Row from './table-row';
import React from 'react';
import BucketIcon from './bucket-icon';

export default function Table({data}) {
    const rows = data.map(x => <Row user={x}/>);
    return (
        <div className={"header"}>
            <img className={"row__avatar"} src={user.avatar}/>
            <div className={"header__name"}>{user.fullName}</div>
            <div className={"header__speciality"}>{user.speciality}</div>
            <div className={"header__group"}>{user.groupName}</div>
            <div className={"header__age"}>{user.age}</div>
            <div className={"header__rating"}>{user.rating}</div>
        </div>
    )
}
