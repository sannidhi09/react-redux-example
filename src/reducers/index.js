import { combineReducers } from 'redux';
import { register } from './register';
import { login } from './login';
import { alert } from './alert';
import { user } from './user';

const rootReducer = combineReducers({
  register: register,
  login: login,
  alert: alert,
  user: user
});

export default rootReducer;