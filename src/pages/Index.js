import React, {Component} from 'react';

import '../styles/App.scss';
import Row from '../components/table-row';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';
import {Link} from 'react-router-dom';
import SelectSort from '../components/select/select-sort';
import Table from '../components/table';
import Card from '../components/card';

export default function Index() {
    const options = [
        {value: 'fullName', label: 'Имя'},
        {value: 'groupName', label: 'Группа'},
        {value: 'speciality', label: 'Специальность'},
        {value: 'age', label: 'Возраст'},
        {value: 'rating', label: 'Рейтинг'},
    ];

    return (
        <div>
            <Header/>
            <div className={'container container_page_main'}>
                <h1 className={'container__title'}>Студенты</h1>
                <section className={'container__button button_width_short'}>
                    <Link to={'/create'}>
                        <Button buttonType={'plus'} text={'Добавить студента'}/>
                    </Link>
                </section>
                <section className={'container__search'}>
                    <SearchField/>
                    <SelectSort options={options}
                                defaultValue={options[0]}
                                onChange={(e) => console.log(e)}
                    />
                </section>
                <section className={'container__table'}>
                    <Card user={
                        {
                            fullName: 'Иванов Иван Иванович',
                            age: 21,
                            rating: 99,
                            speciality: 'Компьютерная безопасность',
                            groupName: 'КБ-101',
                            color: '#FFEEFF'
                        }
                    }/>
                </section>
            </div>
        </div>
    );
}
