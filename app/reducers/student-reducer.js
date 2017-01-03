'use strict';

import { FETCH_STUDENT } from '../actions/index.js';

const INITIAL_STATE = {
  allStudents: [],
  students: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type){
    case FETCH_STUDENT:
      return { ...state, allStudents: action.payload.data};
    default: return state;
  }
}

