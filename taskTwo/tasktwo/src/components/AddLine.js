import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addLine} from '../redux/actions';

export default function AddLine() {
  const dispatch = useDispatch();
  const length = useSelector(state => state.info.info.length + 1);
  const [form, setForm] = useState(true);
  const [values, setValues] = useState();

  useEffect(() => {
    if (values) {
      dispatch(addLine(values))
    }
  }, [values, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, age, phone, email} = e.target;
    setValues(() => {
     return [
      {
        field: 'Id',
         value: length,
      },
      {
        field: 'Name',
        value: name.value,
      },
      {
        field: 'Age',
        value: age.value,
      },
      {
        field: 'Phone',
        value: phone.value,
      },
      {
        field: 'Email',
        value: email.value,
      },
    ]});
    setForm(true);
  }

  return (
    form ? (
    <div className='d-flex justify-content-center'>
      <button onClick={() => setForm(false)} className="btn btn-primary btn-lg btn-block">Add Info</button>
    </div>) : (
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input id='name' className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor='age'>Age</label>
          <input id='age' className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor='phone'>Phone</label>
          <input id='phone' className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor='email'>E-mail</label>
          <input id='email' className="form-control" required />
        </div>
        <input type="submit" className="btn btn-primary" value='Submit' />
      </form>
    )
  )
}

