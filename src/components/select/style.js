export default {
    container: (provided, state) => ({
        ...provided,
        fontFamily: '\'Geometria\', sans-serif',
        fontWeight: 'normal',
        fontSize: '16px'
    }),
    control: (provided, state) => ({
        ...provided,
        height: '48px',
        boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07)',
        border: 'none'
    }),
    menu: (provided, state) => ({
        ...provided,
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
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        paddingRight: "22px"
    })
};
