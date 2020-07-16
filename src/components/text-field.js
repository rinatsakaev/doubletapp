import React from 'react';

export default function TextField({label, placeholder, isDisabled=false, iconClass}) {
    return (
        <div className={"field field_length_short"}>
            <p className={"field__label"}>{label}</p>
            <div className={`field__container ${iconClass}`}>
                <input className={"field__input"} type={"text"} placeholder={placeholder} disabled={isDisabled}/>
            </div>
        </div>
    );
}
