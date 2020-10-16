import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {infoReducer} from './reducers'

const preloadedState = window.localStorage.getItem('redux') ?? '{}';

const store = createStore(
  combineReducers({
    info: infoReducer,
  }),
  JSON.parse(preloadedState),
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
})

export default store;
