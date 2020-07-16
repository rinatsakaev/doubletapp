import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className={'header__logo'}/>
            </Link>
            <span className={'header__title'}>Students</span>
        </div>
    );
}
