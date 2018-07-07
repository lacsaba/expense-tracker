import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action) {
  switch (action.type) {
    case types.FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}
