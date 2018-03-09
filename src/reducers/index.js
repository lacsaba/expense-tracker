import { combineReducers } from 'redux';
import categories from './categoryReducer';
import categoryTree from './categoryTreeReducer';

const rootReducer = combineReducers({
  categories,
  categoryTree
});

export default rootReducer;
