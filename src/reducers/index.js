import { combineReducers } from 'redux';
import { register } from './register';
import { login } from './login';
import { alert } from './alert';

const rootReducer = combineReducers({
  register: register,
  login: login,
  alert: alert
});

export default rootReducer;