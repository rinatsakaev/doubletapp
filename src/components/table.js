import React from 'react';
import Row from './table-row';

export default function Table({data, onDelete}) {
    const rows = data.map((x) => <Row user={x} onDelete={() => onDelete(x.id)} key={x.id}/>);

    return (
        <table className="users-table">
            <thead className="users-table__head">
            <th className="users-table__header"/>
            <th className="users-table__header">ФИО</th>
            <th className="users-table__header">Специальность</th>
            <th className="users-table__header">Группа</th>
            <th className="users-table__header">Возраст</th>
            <th className="users-table__header">Рейтинг</th>
            <th className="users-table__header"/>
            </thead>
            <tbody className="users-table__body">
            {rows}
            </tbody>
        </table>
    );
}
