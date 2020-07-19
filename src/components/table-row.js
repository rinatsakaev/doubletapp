import React from 'react';
import BucketIcon from './bucket-icon';
import {staticBasePath} from '../config';

export default function Row({ user, onDelete }) {
  return (
    <tr className="users-table__row">
      <td className="users-table__cell">
          <img className="users-table__avatar" src={`${staticBasePath}/avatars/${user.avatar}`}/>
      </td>
      <td className="users-table__cell">{user.fullName}</td>
      <td className="users-table__cell">{user.speciality}</td>
      <td className="users-table__cell">{user.groupName}</td>
      <td className="users-table__cell">{user.age}</td>
      <td className="users-table__cell">{user.rating}</td>
      <td className="users-table__cell users-table__controls">
        <div className="users-table__color" style={{ background: user.color, backgroundSize:"100%" }}/>
        <BucketIcon onClick={onDelete}/>
      </td>
    </tr>
  );
}
