import {all, takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {fetchCategories} from "./categories";

export function* watchCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategories);
}
