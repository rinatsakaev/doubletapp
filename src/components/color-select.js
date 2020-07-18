import React, {useState} from 'react';
import TextField from './text-field';

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
                   setSelectedColor(e.target.id);
               }}/>
    </li>);
    return (
        <div className={'color-select field_length_medium'}>
            <TextField placeholder={'Выбрать'}
                       label={'Любимый цвет'}
                       isDisabled={true}
                       iconClass={'field__icon_dropdown'}
                       onClick={() => setIsExpanded((prev) => !prev)}
            />
            {isExpanded ?
                <ul className={'color-select__list field_length_medium'}>
                    {listItems}
                </ul> : null
            }
        </div>
    )
}
