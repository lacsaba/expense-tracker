import {all, takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {auth, checkAuthState, checkAuthTimeout, logout} from "./auth";
import {fetchCategories} from "./categories";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INIT_LOGOUT, logout),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeout),
    takeEvery(actionTypes.AUTH_USER, auth),
    takeEvery(actionTypes.AUTH_CHECK_STATE, checkAuthState)
  ]);
}

export function* watchCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategories);
}
