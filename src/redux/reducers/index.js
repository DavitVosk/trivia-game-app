import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

import questions from './questions';

const root = combineReducers({
  questions
});

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(root);

export default store;
