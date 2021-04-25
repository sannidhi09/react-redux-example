import { combineReducers } from 'redux';
import { register } from './register';

const rootReducer = combineReducers({
  register: register
});

export default rootReducer;