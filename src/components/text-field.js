import React from 'react';

export default function TextField({label, placeholder}) {
    return (
        <div className={"field field_length_short"}>
            <p className={"field__label"}>{label}</p>
            <input className={"field__input"} type={"text"} placeholder={placeholder}/>
        </div>
    );
}
