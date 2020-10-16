import React, {useEffect} from 'react';
import Table from './components/Table';
import {useDispatch} from 'react-redux';
import {getInfo} from './redux/actions'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo())
  }, [dispatch])

  return (
    <Table />
  );
}

