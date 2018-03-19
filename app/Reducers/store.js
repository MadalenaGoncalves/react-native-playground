import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import counterReducer from './CounterReducer';
import serviceReducer from './ServiceReducer';

const AppReducers = combineReducers({
  // counterReducer,
  serviceReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}

const logger = createLogger();

const middleware = () => {
  return applyMiddleware(thunk, logger);
}


// let store = createStore(rootReducer);
let store = createStore(rootReducer, compose(middleware()));

export default store;
