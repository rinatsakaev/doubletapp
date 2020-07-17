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
                    <div className={'container__controls'}>
                        <p className={'controls__title'}>
                            Назад к списку студентов
                        </p>
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
                            <TextField label={'ФИО'} placeholder={'Имя'}/>
                        </div>
                        <div className={'container__field_gender'}>
                            <Select placeholder={'Мужской'} label={'Пол'}/>
                        </div>
                        <div className={'container__field_email'}>
                            <TextField label={'Email'} placeholder={'Email'}/>
                        </div>
                        <div className={'container__field_color'}>
                            <ColorSelect onSelected={(id) => console.log(id)} colors={[
                                {id: 1,
                                    color: "blue"},
                                {id: 2,
                                    color: "red"},
                                {id: 3,
                                    color:"yellow"}
                            ]}/>
                        </div>
                        <div className={'container__field_speciality'}>
                            <Select placeholder={'Выбрать'} label={'Специальность'}/>
                        </div>
                        <div className={'container__field_group'}>
                            <Select placeholder={'Выбрать'} label={'Группа'}/>
                        </div>
                        <div className={'container__field_rating'}>
                            <TextField label={'Рейтинг'} placeholder={'0'}/>
                        </div>
                        <div className={'container__field_button'}>
                            <Button text={'Создать'}/>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
