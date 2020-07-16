import React from 'react';

export default function SearchField() {
    return (
        <div className={"field field_length_long field_type_search"}>
            <input className={"field__input field__input_type_search"} type={"text"} placeholder={"Поиск по имени"}/>
        </div>
    )
}
