import React, {Component, useEffect, useState} from 'react';

import '../styles/App.scss';
import Row from '../components/table-row';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';
import TextField from '../components/text-field';
import Select from '../components/select/select';
import ColorSelect from '../components/color-select';
import {Link} from 'react-router-dom';
import ApiService from '../services/apiService';

export default function Create() {
    const [selectedColor, setSelectedColor] = useState(undefined);
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState(undefined);
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState(undefined);
    const [group, setGroup] = useState(undefined);
    const [rating, setRating] = useState(undefined);
    const [groups, setGroups] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        ApiService.fetchColors()
            .then(x => x.json())
            .then(setColors)
            .catch(x => console.log(x));
        ApiService.fetchSpecialities()
            .then(x => x.json())
            .then(setSpecialities)
            .catch(x => console.log(x));
    }, []);

    useEffect(() => {
        setGroups(speciality.Groups);
    }, [speciality]);


    return (
        <div>
            <Header/>
            <div className={'container container_page_create'}>
                <div className={'container__controls'}>
                    <Link to={'/'}>
                        <p className={'controls__title'}>
                            Назад к списку студентов
                        </p>
                    </Link>
                </div>
                <h1 className={'container__title_page_create'}>Новый студент</h1>
                <section className={'container__change-avatar'}>
                    <div className={'change-avatar'}>
                        <img className={'change-avatar__image'}
                             src={'./static/avatars/avatar'}/>
                        <div className={'change-avatar__container'}>
                            <label className={'change-avatar__label'} htmlFor={'avatar-input'}>Сменить
                                аватар</label>
                            <input type={'file'} className={'change-avatar__input'} id={'avatar-input'}/>
                            <p className={'change-avatar__size'}>500x500</p>
                        </div>
                    </div>
                </section>
                <section className={'container__fields'}>
                    <div className={'container__field_name'}>
                        <TextField label={'ФИО'} placeholder={'Имя'} onChange={(e) => setFullName(e.target.value)}/>
                    </div>
                    <div className={'container__field_gender'}>
                        <Select placeholder={'Мужской'} label={'Пол'} onChange={(e) => setGender(e.id)}/>
                    </div>
                    <div className={'container__field_email'}>
                        <TextField label={'Email'} placeholder={'Email'} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={'container__field_color'}>
                        <ColorSelect onSelected={setSelectedColor} colors={colors}/>
                    </div>
                    <div className={'container__field_speciality'}>
                        <Select placeholder={'Выбрать'} label={'Специальность'} onChange={(e) => setSpeciality(e.id)}/>
                    </div>
                    <div className={'container__field_group'}>
                        <Select placeholder={'Выбрать'} label={'Группа'} onChange={(e) => setGroup(e.id)}/>
                    </div>
                    <div className={'container__field_rating'}>
                        <TextField label={'Рейтинг'} placeholder={'0'} onChange={(e) => setRating(e.target.value)}/>
                    </div>
                    <div className={'container__field_button button_width_long'}>
                        <Button text={'Создать'}/>
                    </div>
                </section>
            </div>
        </div>
    );
}
