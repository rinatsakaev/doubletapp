import React from 'react';

export default function TextField({label, placeholder, isDisabled=false, iconClass, onClick, onChange}) {
    return (
        <div className={"field field_length_medium"}>
            <p className={"field__label"}>{label}</p>
            <div className={`field__container ${iconClass}`} onClick={() => onClick()}>
                <input className={"field__input"}
                       type={"text"}
                       placeholder={placeholder}
                       disabled={isDisabled}
                       onChange={onChange}
                />
            </div>
        </div>
    );
}
