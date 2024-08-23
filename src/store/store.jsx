import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducer';
import { loadState, saveState } from '../localStorageHelpers'; 


const persistedState = loadState();


const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: Adds Redux DevTools extension support
));


store.subscribe(() => {
  saveState(store.getState());
});

export default store;
