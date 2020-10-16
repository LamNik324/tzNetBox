import {SET_INFO, LOADING_INFO, ERROR_INFO} from './action-types';

const initialState = {
  info: [],
  loading: false,
  error: '',
};

export function infoReducer(state = initialState, action) {
  switch(action.type) {
    case SET_INFO:
      return {
        ...state,
        info: action.payload,
        loading: false,
        error: '',
      }

    case LOADING_INFO: 
      return {
        ...state,
        info: [],
        loading: true,
        error: '',
    }

    case ERROR_INFO: 
      return {
        ...state,
        info: [],
        loading: false,
        error: action.payload.message
      }

    default:
      return state;
  }
}
