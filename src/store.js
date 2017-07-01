import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = compose(applyMiddleware(
  thunkMiddleware
),window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)
export default createStoreWithMiddleware(reducers);
