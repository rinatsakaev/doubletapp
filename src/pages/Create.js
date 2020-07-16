import React, {Component} from 'react';

import '../styles/App.scss';
import Row from '../components/table-row';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';
import TextField from '../components/text-field';
import Select from '../components/select/select';
import ColorSelect from '../components/color-select';

export default class Create extends Component {
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
                <div className={'container container_page_create'}>
                    <section className={'controls-area'}>

                    </section>
                    <section className={'title-area'}>
                        <h1 className={'container__title'}>Новый студент</h1>
                    </section>
                    <section className={'avatar-area'}>
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
                    <section className={'fields-area'}>
                        <TextField label={'ФИО'} placeholder={'Имя'}/>
                        <TextField label={'Email'} placeholder={'Email'}/>
                        <Select placeholder={'Выбрать'} label={'Специальность'}/>
                        <Select placeholder={'Выбрать'} label={'Группа'}/>
                        <TextField label={'Рейтинг'} placeholder={'0'}/>
                    </section>
                    <section className={'fields-area'}>
                        <Select placeholder={'Мужской'} label={'Пол'}/>
                        <ColorSelect onSelected={(id) => console.log(id)} colors={[
                            {id: 1,
                            color: "blue"},
                            {id: 2,
                            color: "red"},
                            {id: 3,
                            color:"yellow"}
                        ]}/>
                    </section>
                </div>
            </div>
        );
    }
}
