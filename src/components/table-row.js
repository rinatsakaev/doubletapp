import React from 'react';
import BucketIcon from './bucket-icon';

export default function Row({ user, onDelete }) {
  return (
    <tr className="users-table__row" key={user.id}>
      <td className="users-table__cell"><img className="users-table__avatar" src={user.avatar}/></td>
      <td className="users-table__cell">{user.fullName}</td>
      <td className="users-table__cell">{user.speciality}</td>
      <td className="users-table__cell">{user.groupName}</td>
      <td className="users-table__cell">{user.age}</td>
      <td className="users-table__cell">{user.rating}</td>
      <td className="users-table__cell users-table__controls">
        <div className="users-table__color" style={{ background: user.color }}/>
        <BucketIcon onClick={onDelete}/>
      </td>
    </tr>
  );
}
