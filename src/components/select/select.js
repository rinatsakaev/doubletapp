import React from 'react'
import Select2, {components} from 'react-select'
import style from './style';
const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={'../static/dropdown-icon.svg'}/>
        </components.DropdownIndicator>
    );
};
export default function Select({placeholder, label}) {

    return (
        <div className={"field field_length_short"}>
            <p className={"field__label"}>{label}</p>
            <Select2 styles={style} placeholder={placeholder} options={[
                {value: 'chocolate', label: 'Chocolate'},
                {value: 'strawberry', label: 'Strawberry'},
                {value: 'vanilla', label: 'Vanilla'}
            ]} components={{DropdownIndicator}}/>
        </div>
    )
}
