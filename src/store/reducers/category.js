import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {updateObject} from "../../shared/utility";

export default function categoryReducer(state = initialState.categories, action) {
  switch (action.type) {
    case types.FETCH_CATEGORIES_START: return updateObject(state, {loading: true});
    case types.FETCH_CATEGORIES_SUCCESS: return updateObject(state, {loading: false, categories: action.categories});
    case types.FETCH_CATEGORIES_FAIL: return updateObject(state, {loading: false})
    default: return state;
  }
}
