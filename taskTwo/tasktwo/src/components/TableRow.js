import React, {useState} from 'react';
import Cell from './Cell';
import {useDispatch} from 'react-redux';
import {deleteInfo, editableCell, saveInfo} from '../redux/actions';

export default function TableRow(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    editable: null,
    update: 'Update',
    button: 'btn btn-warning'
  })

  const editLine = () => {
    if (data.update === 'Save') {
      setData({
        editable: false,
        update: 'Update',
        button: 'btn btn-warning'
      })
      dispatch(editableCell(false));
      dispatch(saveInfo(props.arr[0].value));
    } else {
      setData({
        editable: true,
        update: 'Save',
        button: 'btn btn-success'
      })
      dispatch(editableCell(true));
    }
  }

  return (
    <tbody>
      <tr>
    {props.arr.map(el => (
      <td key={el.value}>
      <Cell cell={el} editable={data.editable} />
      </td>
    ))}
    <td>
      <button onClick={() => dispatch(deleteInfo(props.arr[0].value))} className='btn btn-danger mb-1'>Delete</button>
      <button onClick={() => editLine()} className={data.button}>{data.update}</button>
      </td>
      </tr>
    </tbody>
  )
}
