import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import StudentReducer from './student-reducer';


const rootReducer = combineReducers({
  // students: StudentReducer,
  form: formReducer
})

export default rootReducer
