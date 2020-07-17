import BucketIcon from './bucket-icon';
import React from 'react';

export default function Card({user}) {
    return (
        <div className={'card'}>
            <div className={'card__header'}>
                <img className={'card__avatar'} src={user.avatar}/>
                <div className={'card__data'}>
                    <p className={'card__title'}>{user.fullName}</p>
                    <div className={'card__color'}
                         style={{background: user.color}}/>
                    <div className={'card__rating'}>
                        <img className={'card__star'} src={'/static/star-icon.svg'}/>
                        {user.rating}
                    </div>
                </div>
                <BucketIcon/>
            </div>
            <ul className={'card__list'}>
                <li className={'card__item'}>{user.age}</li>
                <li className={'card__item'}>{user.speciality}</li>
                <li className={'card__item'}>{user.groupName}</li>
            </ul>
        </div>
    )
}
