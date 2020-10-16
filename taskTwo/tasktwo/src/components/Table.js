import React from 'react';
import TableRow from './TableRow';
import {useSelector} from 'react-redux';

export default function Table() {
  const info = useSelector(state => state.info.info)
  return (
    <div className="container">
    <h1>
      Table
    </h1>
    <table className="table table-bordered">
    <thead>
    <tr>
      {info && info.map((arr, index) => (
      <th key={arr[index].value} scope="col">{arr[index].field}</th>
      ))}
      <th scope='col'>Actions</th>
    </tr>
  </thead>
      {info && info.map((el,index) => <TableRow key={el[index].field} arr={el} />)}
    </table>
    </div>
  )
}
