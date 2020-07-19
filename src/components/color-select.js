import React, {useState} from 'react';

export default function ColorSelect({onChange, colors}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedColor, setSelectedColor] = useState();
    const listItems = colors.map(x => <li className={'color-select__item'}>
        <label className={'color-select__label'} htmlFor={x.id} style={{background: x.color}}/>
        <input className={'color-select__input'}
               type={'radio'}
               name={'color'}
               id={x.id}
               onChange={(e) => {
                   setIsExpanded(false);
                   onChange(e.target.id);
                   const color = colors.find(x => x.id === parseInt(e.target.id));
                   setSelectedColor(color.color);
               }}/>
    </li>);
    return (
        <div className={'color-select field_length_medium'}>
            <p className={'field__label'}>Любимый цвет</p>
            <div className={`field__container field__icon_dropdown`}
                 onClick={() => setIsExpanded(!isExpanded)}>
                <div className={'color-select__color'} style={{background: selectedColor}}/>
                <input className={'field__input'}
                       type={'text'}
                       placeholder={selectedColor?null:'Выбрать'}
                       disabled={true}
                />
            </div>
            {isExpanded ?
                <ul className={'color-select__list field_length_medium'}>
                    {listItems}
                </ul> : null
            }
        </div>
    )
}
