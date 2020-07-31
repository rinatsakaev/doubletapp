import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <Link to="/">
            <div className="header">
                <div className="header__logo"/>
                <span className="header__title">Students</span>
                <a className="header__profile" href="https://github.com/rinatsakaev"
                   onClick={() => window.open("https://github.com/rinatsakaev/doubletapp")}>rinatsakaev</a>
            </div>
        </Link>
    );
}
