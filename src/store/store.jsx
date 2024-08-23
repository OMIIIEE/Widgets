import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducer';
import { loadState, saveState } from '../localStorageHelpers'; // Import your helper functions

// Load the persisted state
const persistedState = loadState();

// Create the Redux store
const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: Adds Redux DevTools extension support
));

// Save the state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
