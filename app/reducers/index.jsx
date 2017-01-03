import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import StudentReducer from './student-reducer';
import CampusReducer from './campus-reducer.js';

const rootReducer = combineReducers({
  students: StudentReducer,
  campuses: CampusReducer,
  form: formReducer
})

export default rootReducer
