import React from 'react';
import ReactSelect, { components } from 'react-select';
import style from './style';

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <img src="../static/sort-icon.svg" />
  </components.DropdownIndicator>
);
export default function SelectSort({
  placeholder, options, defaultValue, onChange,
}) {
  return (
    <div className="sort field field_length_short">
      <ReactSelect
        styles={style}
        placeholder={placeholder}
        defaultValue={defaultValue}
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        onChange={onChange}
        components={{ DropdownIndicator }}
      />
    </div>
  );
}
