import React, {Component} from 'react';

import '../styles/App.scss';
import Row from '../components/table-row';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';
import {Link} from 'react-router-dom';
import SelectSort from '../components/select/select-sort';

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
                <section className={'controls-area'}>
                </section>
                <section className={'title-area'}>
                    <h1 className={'container__title'}>Студенты</h1>
                </section>
                <section className={'button-area'}>
                    <Link to={'/create'}>
                        <Button buttonType={'plus'} text={'Добавить студента'}/>
                    </Link>
                </section>
                <section className={'search-area'}>
                    <SearchField/>
                </section>
                <section className={'sort-area'}>
                    <SelectSort options={options}
                                defaultValue={options[0]}
                                onChange={(e) => console.log(e)}
                    />
                </section>
                <section className={'table-area'}>

                </section>
            </div>
        </div>
    );
}
