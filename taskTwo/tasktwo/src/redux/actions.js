import {SET_INFO, LOADING_INFO, ERROR_INFO, DELETE_INFO, EDITABLE_CELL, EDITED_CELL, SAVE_INFO, ADD_LINE} from './action-types';

export function getInfo() {
  return async function (dispatch) {
    dispatch(loadingInfo());
    try {
      const response = await fetch('https://frontend-test.netbox.ru/');
      const result = await response.json()
      dispatch(setInfo(result));
    } catch (err) {
      dispatch(errorInfo(err));
    }
  }
}

export function deleteInfo(id) {
  return async function (dispatch) {
   try {
    const response = await fetch('https://frontend-test.netbox.ru/', {
      // method delete returned 405 error 
      method: 'POST',
      body: JSON.stringify({id})
    })
    const result = await response.status
    if (result === 200) {
      dispatch(deleteOneInfo(id))
    } else {
      dispatch(errorInfo(result));
    }
  } catch (err) {
    dispatch(errorInfo(err))
  }
  }
}

export function saveInfo(changes) {
  return async function(dispatch) {
    try {
      const response = await fetch('https://frontend-test.netbox.ru/', {
        method: 'POST',
        body: changes,
      })
      const result = await response.status
      if (result === 200) {
        dispatch(saveOneInfo(changes))
      } else {
        dispatch(errorInfo(result))
      }
    } catch (err) {
      dispatch(errorInfo(err))
    }
  }
}

export function addLine(line) {
  return async function(dispatch) {
    try {
      const response = await fetch('https://frontend-test.netbox.ru/', {
        method: 'POST',
        body: JSON.stringify(line),
      })
      const result = await response.status;
      return result === 200 ? dispatch(addOneLine(line)) : dispatch(errorInfo(result))
    } catch (err) {
      dispatch(errorInfo(err))
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

export function editedCell(value) {
  return {
    type: EDITED_CELL,
    payload: value
  }
}

export function saveOneInfo(changes) {
  return {
    type: SAVE_INFO,
    payload: changes,
  }
}

export function addOneLine(line) {
  return {
    type: ADD_LINE,
    payload: line,
  }
}
