import React from 'react'
import ReactSelect, {components} from 'react-select'
import style from './style';
const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={'../static/dropdown-icon.svg'}/>
        </components.DropdownIndicator>
    );
};
export default function Select({placeholder, label,
                                   options, onChange, getOptionValue, getOptionLabel}) {
    return (
        <div className={"field field_length_medium"}>
            <p className={"field__label"}>{label}</p>
            <ReactSelect styles={style}
                         placeholder={placeholder}
                         options={options}
                         components={{DropdownIndicator}}
                         onChange = {onChange}
                         getOptionValue = {getOptionValue}
                         getOptionLabel = {getOptionLabel}
            />
        </div>
    )
}
