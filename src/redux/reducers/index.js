import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

const root = combineReducers({
  questions: () => {return []}
});

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(root);

export default store;
