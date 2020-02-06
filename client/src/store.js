import { createStore, applyMiddleware, compose } from 'redux';
import { contactReducer } from './reducers/contactReducer';
import thunk from 'redux-thunk';
export const store = createStore(
  contactReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
