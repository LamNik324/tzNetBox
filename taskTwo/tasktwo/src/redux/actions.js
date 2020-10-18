import {SET_INFO, LOADING_INFO, ERROR_INFO, DELETE_INFO, EDITABLE_CELL, EDITED_CELL} from './action-types';

export function getInfo() {
  return async function (dispatch) {
    dispatch(loadingInfo());
    try {
      const response = await fetch('https://frontend-test.netbox.ru/');
      const result = await response.json()
      dispatch(setInfo(result));
      console.log(response.data);
    } catch (err) {
      dispatch(errorInfo(err));
      console.log(err);
    }
  }
}

export function deleteInfo(id) {
  return async function (dispatch) {
   try {
    const response = await fetch('https://frontend-test.netbox.ru/', {
      method: 'delete',
      body: id,
    })
    const result = await response.status
    if (result === 200) {
      dispatch(deleteOneInfo())
    } else {
      dispatch(errorInfo(response.status));
    }
  } catch (err) {
    dispatch(errorInfo(err))
    console.log(err)
  }
  }
}

export function setInfo(info) {
  return {
    type: SET_INFO,
    payload: info,
  }
}

export function loadingInfo() {
  return {
    type: LOADING_INFO,
  }
}

export function errorInfo(err) {
  return {
    type: ERROR_INFO,
    payload: err,
    error: true,
  }
}

export function deleteOneInfo(id) {
  return {
    type: DELETE_INFO,
    payload: id,
    error: false,
  }
}

export function editableCell(boolean) {
  return {
    type: EDITABLE_CELL,
    payload: boolean,
  }
}
// отредактировать !!!!!
export function editedCell(value) {
  return {
    type: EDITED_CELL,
    payload: value
  }
}
