import React, {Component} from 'react'
import Select2, {components} from 'react-select'
const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={'../static/dropdown-icon.svg'}/>
        </components.DropdownIndicator>
    );
};
export default function Select({placeholder}) {
    const styles = {
        container: () => ({
            width: '380px',
            fontFamily: '\'Geometria\', sans-serif',
            fontWeight: 'normal',
            fontSize: '16px',
        }),
        menu: () => ({
            padding: '16px 11px',
            boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07)',
            borderRadius: '6px'
        }),
        option: (provided, state) => ({
            background: state.isFocused ? 'rgba(73, 194, 232, 0.11)' : '#ffffff',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '5px'
        }),
        indicatorSeparator: () => ({
            display: 'none'
        })
    };
    return (
        <Select2 styles={styles} placeholder={placeholder} options={[
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ]} components={{DropdownIndicator}}/>
    )
}
