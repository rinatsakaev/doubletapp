import React from 'react';
import BucketIcon from './bucket-icon';
import {staticBasePath} from '../config';

export default function Card({ user, onDelete }) {
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__avatar" src={`${staticBasePath}/avatars/${user.avatar}`}/>
        <div className="card__data">
          <p className="card__title">{user.fullName}</p>
          <div
            className="card__color"
            style={{ background: user.color, backgroundSize:"100%" }}
          />
          <div className="card__rating">
            <img className="card__star" src="/static/star-icon.svg"/>
            {user.rating}
          </div>
        </div>
        <BucketIcon onClick={() => onDelete(user.id)}/>
      </div>
      <ul className="card__list">
        <li className="card__item">{user.age}</li>
        <li className="card__item">{user.speciality}</li>
        <li className="card__item">{user.groupName}</li>
      </ul>
    </div>
  );
}
