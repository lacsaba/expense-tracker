import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import {watchAuth, watchCategories} from "./sagas";

export default function configureStore(initialState) {
  const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware))
  );

  sagaMiddleware.run(watchAuth);
  sagaMiddleware.run(watchCategories);

  return store;
}
