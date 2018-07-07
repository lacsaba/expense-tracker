import { combineReducers } from 'redux';
import categories from './category';
import auth from './auth';


const rootReducer = combineReducers({
  auth,
  categories
});

export default rootReducer;
