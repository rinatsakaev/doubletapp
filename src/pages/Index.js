import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Button from '../components/button';
import SearchField from '../components/search-field';
import SelectSort from '../components/select/select-sort';
import Card from '../components/card';
import ApiService from '../services/apiService';
import Table from '../components/table';
import useWindowSize from '../hooks/use-window-size';
import reducer from '../reducers/index-reducer';

export default function Index() {
  const [state, dispatch] = useReducer(reducer, { users: [], visibleUsers: [] });
  const [width] = useWindowSize();

  useEffect(() => {
    ApiService.fetchUsers()
      .then((x) => x.json())
      .catch((x) => console.log(x))
      .then((x) => dispatch({
        type: 'USERS_FETCHED',
        payload: x,
      }));
  }, []);

  const sortOptions = [
    { value: 'fullName', label: 'Имя' },
    { value: 'groupName', label: 'Группа' },
    { value: 'speciality', label: 'Специальность' },
    { value: 'age', label: 'Возраст' },
    { value: 'rating', label: 'Рейтинг' },
  ];

  const onDelete = (id) => {
    ApiService.deleteUser(id)
      .then(() => dispatch({ type: 'DELETE', payload: id }))
      .catch(console.log);
  };

  return (
    <div>
      <Header />
      <div className="container container_page_main">
        <h1 className="container__title">Студенты</h1>
        <section className="container__button button_width_short">
          <Link to="/create">
            <Button buttonType="plus" text="Добавить студента" />
          </Link>
        </section>
        <section className="container__search">
          <SearchField onChange={(e) => dispatch({ type: 'SEARCH', payload: e.target.value })}/>
          <SelectSort
            options={sortOptions}
            defaultValue={sortOptions[0]}
            onChange={(e) => dispatch({ type: 'SORT', payload: e.value })}
          />
        </section>
        <section className="container__table">
          {width > 380
            ? state.visibleUsers.length > 0
              ? <Table data={state.visibleUsers} onDelete={onDelete}/> : 'Loading...'
            : state.visibleUsers.length > 0
              ? state.visibleUsers.map((x) => <Card user={x} onDelete={onDelete} key={x.id}/>) : 'Loading...'}
        </section>
      </div>
    </div>
  );
}
