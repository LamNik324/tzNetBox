import React, { useState } from 'react';
import TableRow from './TableRow';
import Loader from './Loader';
import Amount from './Amount';
import {useSelector} from 'react-redux';

export default function Table() {
  const data = useSelector(state => state.info)
  const [error, setError] = useState(data.error)
  return (
    data.loading ? <Loader /> : (
    <div className="container">
      <div className="d-flex justify-content-center text-danger">
      <h1>{error}</h1>
      </div>
    <h1>
      Table
    </h1>
    <table className="table table-bordered">
    <thead>
    <tr>
      <th scope='col'>Id</th>
      <th scope='col'>Name</th>
      <th scope='col'>Age</th>
      <th scope='col'>Phone</th>
      <th scope='col'>E-mail</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
      {data && data.info.map((el,index) => <TableRow key={el[index].field} arr={el} />)}
    </table>
    <Amount />
    </div>)
  )
}
