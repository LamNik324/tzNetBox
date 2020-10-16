import {SET_INFO, LOADING_INFO, ERROR_INFO} from './action-types';

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
