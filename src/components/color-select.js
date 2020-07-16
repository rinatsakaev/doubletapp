import React, {useState} from 'react';
import TextField from './text-field';

export default function ColorSelect({onSelected, colors}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const listItems = colors.map(x => <li className={'color-select__item'}>
        <label className={'color-select__label'} htmlFor={x.id} style={{background: x.color}}/>
        <input className={'color-select__input'}
               type={'radio'}
               name={'colors'}
               id={x.id}
               onChange={(e) => onSelected(e.target.id)}/>
    </li>);
    return (
        <div className={'color-select field_length_short'}>
            <TextField placeholder={'Выбрать'}
                       label={'Любимый цвет'}
                       isDisabled={true}
                       iconClass={'field__icon_dropdown'}
                       onClick={() => setIsExpanded((prev) => !prev)}
            />
            {isExpanded ?
                <ul className={'color-select__list'}>
                    {listItems}
                </ul> : null
            }
        </div>
    )
}
