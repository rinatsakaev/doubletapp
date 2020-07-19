import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <Link to="/">

            <div className="header">
                <div className="header__logo"/>
                <span className="header__title">Students</span>
            </div>
        </Link>
    );
}
