import React from 'react';

export default function Button({buttonType = '', text, classes='', onClick}) {
    return (
        <div className={`button ${classes}`} onClick={onClick}>
            {buttonType === 'plus' &&
            <i className={'button__icon_plus'}/>
            }
            <p className={'button__text'}>{text}</p>
        </div>
    )
}
