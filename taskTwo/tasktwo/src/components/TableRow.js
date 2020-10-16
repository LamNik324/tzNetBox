import React from 'react';
import Row from './Row';

export default function TableRow(props) {
  return (
    <tbody>
      <tr>
    {props.arr.map(el => (
      <td key={el.value}>
      <Row row={el} />
      </td>
    ))}
    <td>
      <button className='btn btn-danger'>Delete</button>
      <button className='btn btn-warning'>Update</button>
      </td>
      </tr>
    </tbody>
  )
}
