import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './ducks';

const ReduxCompose = () => window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const epicMiddleware = createEpicMiddleware();

const composeEnhancers = ReduxCompose() || compose;

const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(rootEpic);
  return store;
}

export default configureStore;