import React, {Component} from 'react';

import '../styles/App.scss';
import Row from '../components/table-row';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';

class App extends Component {


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
                <div className={'container'}>
                    <section className={'controls-area'}>

                    </section>
                    <section className={'title-area'}>
                        <h1 className={'container__title'}>Студенты</h1>
                    </section>
                    <section className={'button-area'}>
                        <Button buttonType={'plus'} text={'Добавить студента'}/>
                    </section>

                    <section className={'search-area'}>
                        <SearchField/>
                    </section>
                    <section className={'sort-area'}>

                    </section>
                    <section className={'table-area'}>
                        <table className={'users-table'}>
                            <thead className={'users-table__head'}>
                            <th className={'users-table__header'}>
                            </th>
                            <th className={'users-table__header'}>ФИО</th>
                            <th className={'users-table__header'}>Специальность</th>
                            <th className={'users-table__header'}>Группа</th>
                            <th className={'users-table__header'}>Возраст</th>
                            <th className={'users-table__header'}>Рейтинг</th>
                            <th className={'users-table__header'}></th>
                            <th className={'users-table__header'}></th>
                            </thead>
                            <tbody className={'users-table__body'}>
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}
                            {row}

                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
