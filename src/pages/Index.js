import React, {Component, useEffect, useReducer} from 'react';

import '../styles/App.scss';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';
import {Link} from 'react-router-dom';
import SelectSort from '../components/select/select-sort';
import Card from '../components/card';
import ApiService from '../services/apiService';
import Table from '../components/table';
import useWindowSize from '../hooks/use-window-size';

function sortFunction(a, b, field) {
    if (a[field] < b[field]) {
        return -1;
    }
    if (a[field] > b[field]) {
        return 1;
    }
    return 0;
}

function reducer(state, action) {
    switch (action.type) {
        case 'USERS_FETCHED':
            const users = action.payload.map(x => ({
                fullName: x.fullName,
                age: x.age,
                rating: x.rating,
                speciality: x.Group.Speciality.name,
                groupName: x.Group.name,
                color: x.Color.color
            }));
            return {
                ...state,
                users,
                visibleUsers: users
            };
        case 'SORT': {
            const sortField = action.payload;
            const newUsersArray = [].concat(state.users)
                .filter(x => state.query ? x.fullName.startsWith(state.query) : true)
                .sort((a, b) => sortFunction(a, b, sortField));
            return {
                ...state,
                visibleUsers: newUsersArray,
                sortField: sortField
            };
        }

        case 'SEARCH': {
            const query = action.payload;
            const newUsersArray = [].concat(state.users)
                .filter(x => x.fullName.startsWith(query))
                .sort((a, b) => sortFunction(a, b, state.sortField));
            return {
                ...state,
                visibleUsers: newUsersArray,
                query
            };
        }
        default:
            return state;
    }
}

export default function Index() {
    const [state, dispatch] = useReducer(reducer, {users: [], visibleUsers: []});
    const [width] = useWindowSize();

    useEffect(() => {
        ApiService.fetchUsers()
            .then(x => x.json())
            .catch(x => console.log(x))
            .then(x => dispatch({
                type: 'USERS_FETCHED',
                payload: x
            }))
    }, []);

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
                    <SearchField onChange={(e) => dispatch({type: 'SEARCH', payload: e.target.value})}/>
                    <SelectSort options={options}
                                defaultValue={options[0]}
                                onChange={(e) => dispatch({type: 'SORT', payload: e.value})}
                    />
                </section>
                <section className={'container__table'}>
                    {width > 380 ?
                        state.visibleUsers.length > 0 ? <Table data={state.visibleUsers}/> : 'Loading...' :
                        state.visibleUsers.length > 0 ? state.visibleUsers.map(x => <Card user={x}/>) : 'Loading...'
                    }
                </section>
            </div>
        </div>
    );
}
