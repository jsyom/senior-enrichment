'use strict';

import { FETCH_STUDENT } from '../actions/index.js';

const INITIAL_STATE = {
  allStudents: [],
  students: null
};

export default function (state = INITIAL_STATE, action) {
  const newState = Object.assign({}, state)
  switch (action.type){
    case FETCH_STUDENT:
      newState.allStudents = action.payload.data
      return newState;
    default: return state;
  }
}
