import * as types from '../actions/actionTypes';
import initialState from './initialState';

const categoryTreeReducer = (state = initialState.isVisible, action) => {
  switch (action.type) {
    case types.TOGGLE_VISIBILITY: {
      const newState = Object.assign({}, state);
      newState[action.category.id] = !newState[action.category.id];
      return newState;
    }
    default:
      return state;
  }
};

export default categoryTreeReducer;
