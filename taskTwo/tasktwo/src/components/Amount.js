import React from 'react';
import {useSelector} from 'react-redux';

export default function Amount() {
  const amount = useSelector(state => state.info.info.length)
  return (
    <div className="d-flex justify-content-center">
      <h1>Amount of lines: {amount}</h1>
    </div>
  )
}
