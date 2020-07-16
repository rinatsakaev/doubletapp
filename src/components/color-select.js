import React from 'react';
import TextField from './text-field';

export default function ColorSelect() {
    return (
        <div className={"color-select field_length_short"}>
           <TextField placeholder={'Выбрать'}
                      label={'Любимый цвет'}
                      isDisabled={true}
                      iconClass={"field__icon_dropdown"}/>
            <ul className={"color-select__list"}>
                <li className={"color-select__item"}>
                    <label className={'color-select__label'} for={'1'}/>
                    <input className={"color-select__input"}
                           type={'radio'}
                           name={'colors'}
                           id={'1'}/>
                </li>
                <li className={"color-select__item"}>
                    <label className={'color-select__label'} htmlFor={'1'}/>
                    <input className={"color-select__input"}
                           type={'radio'}
                           name={'colors'}
                           id={'1'}/>
                </li>
                <li className={"color-select__item"}>
                    <label className={'color-select__label'} htmlFor={'1'}/>
                    <input className={"color-select__input"}
                           type={'radio'}
                           name={'colors'}
                           id={'1'}/>
                </li>
                <li className={"color-select__item"}>
                    <label className={'color-select__label'} htmlFor={'1'}/>
                    <input className={"color-select__input"}
                           type={'radio'}
                           name={'colors'}
                           id={'1'}/>
                </li>
                <li className={"color-select__item"}>
                    <label className={'color-select__label'} htmlFor={'1'}/>
                    <input className={"color-select__input"}
                           type={'radio'}
                           name={'colors'}
                           id={'1'}/>
                </li>
                <li className={"color-select__item"}>
                    <label className={'color-select__label'} htmlFor={'1'}/>
                    <input className={"color-select__input"}
                           type={'radio'}
                           name={'colors'}
                           id={'1'}/>
                </li>
                <li className={"color-select__item"}>
                    <label className={'color-select__label'} htmlFor={'1'}/>
                    <input className={"color-select__input"}
                           type={'radio'}
                           name={'colors'}
                           id={'1'}/>
                </li>
            </ul>
        </div>
    )
}
