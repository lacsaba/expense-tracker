import {put} from 'redux-saga/effects';

import * as actions from '../actions';
import categoryApi from "../../api/category";


export function* fetchCategories(token, userId) {
  yield put(actions.fetchCategoriesStart());
  const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;

  try {
    const categories = yield categoryApi.getAllCategories(queryParams);
    yield put(actions.fetchCategoriesSuccess(categories));
  }
  catch (error) {
    yield put(actions.fetchCategoriesFail(error));
  }
}
