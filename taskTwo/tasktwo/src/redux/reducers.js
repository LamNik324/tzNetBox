import {SET_INFO, LOADING_INFO, ERROR_INFO, DELETE_INFO, EDITABLE_CELL, EDITED_CELL, SAVE_INFO, ADD_LINE} from './action-types';

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
    
    case DELETE_INFO: 
    return {
      ...state,
      info: state.info.filter(el => el[0].value !== action.payload)
    }

    case EDITABLE_CELL: 
      return {
        ...state,
        editable: action.payload,
      }

    case EDITED_CELL: 
      return {
        ...state,
        info: state.info
      }

    case SAVE_INFO:
      return {
        ...state,
      }

    case ADD_LINE:
      return {
        ...state,
        info: [...state.info, action.payload],
      }

    default:
      return state;
  }
}
