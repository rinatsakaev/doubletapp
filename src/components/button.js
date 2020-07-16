import React from 'react';

export default function Button({buttonType = '', text, classes=''}) {
    return (
        <div className={`button ${classes}`}>
            {buttonType === 'plus' &&
            <i className={'button__icon_plus'}/>
            }
            <p className={'button__text'}>{text}</p>
        </div>
    )
}
