import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function Cell(props) {
  const [changes, setChanges] = useState(props.cell.value)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setChanges(e)
  }

  return (
    <>
    {props.editable ? (
      <div>
            <input onChange={(e) => handleSubmit(e.target.value)} placeholder={changes}  />
      </div>
    ) : changes}
      </>
  )
}
