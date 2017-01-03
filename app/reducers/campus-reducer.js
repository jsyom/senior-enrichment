'use strict';

import { FETCH_CAMPUS } from '../actions/index.js';

const INITIAL_STATE = {
  allCampus: [],
  campus: null
}

export default function(state = INITIAL_STATE, action)  {
  const newState = Object.assign({}, state);
  switch (action.type){
    case FETCH_CAMPUS:
      newState.allCampus = action.payload.data
      return newState;
    default: return state;
  }
}
