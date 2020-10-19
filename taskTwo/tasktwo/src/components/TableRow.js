import React, {useState} from 'react';
import Cell from './Cell';
import {useDispatch} from 'react-redux';
import {deleteInfo, editableCell} from '../redux/actions';

export default function TableRow(props) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(null)
  const [update, setUpdate] = useState('Update');

  const editLine = () => {
    if (update === 'Save') {
      setUpdate('Update');
      dispatch(editableCell(false));
      setEditable(false);
    } else {
      setUpdate('Save');
      dispatch(editableCell(true));
      setEditable(true)
    }
  }

  return (
    <tbody>
      <tr>
    {props.arr.map(el => (
      <td key={el.value}>
      <Cell cell={el} editable={editable} />
      </td>
    ))}
    <td>
      <button onClick={() => dispatch(deleteInfo(props.arr[0].value))} className='btn btn-danger mb-1'>Delete</button>
      <button onClick={() => editLine()} className='btn btn-warning'>{update}</button>
      </td>
      </tr>
    </tbody>
  )
}
