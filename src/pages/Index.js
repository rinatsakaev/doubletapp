import React, {Component} from 'react';

import '../styles/App.scss';
import Row from '../components/table-row';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';
import {Link} from 'react-router-dom';

export default class Index extends Component {
    render() {
        const row = <Row user={{
            fullName: 'Иванов Иван Иванович',
            groupName: 'ФИИТ-101',
            speciality: 'Компьютерная безопасность',
            age: 21,
            rating: 99,
            color: '#FFEEFF',
            avatar: '/static/avatars/orig.jpg'
        }}/>;
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
                    </section>
                    <section className={'table-area'}>
                    </section>
                </div>
            </div>
        );
    }
}
