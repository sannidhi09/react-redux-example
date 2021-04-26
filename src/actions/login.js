import { Constants } from '../constants';
import { userService } from '../service';
import { history } from '../helpers';
import { alertAction } from './alert';

function loginRequest() {
    return {
        type: Constants.LOGIN_REQUEST
    }
}

function loginSucess() {
    return {
        type: Constants.LOGIN_SUCCESS
    }
}

function loginFailure() {
    return {
        type: Constants.LOGIN_FAILURE
    }
}

export function login(username, password) {
    return dispatch => {
        dispatch(loginRequest());

        userService.login(username, password).then(
            userDetails => {
                dispatch(loginSucess());
                history.push('/');
            }, error => {
                dispatch(loginFailure());
                dispatch(alertAction.error(error.toString()));
            }
        );
    }
}

export function logout() {
    return dispatch => {
        userService.logout();
        dispatch(() => {return { type: Constants.LOGOUT }});
        dispatch(() => {return { type: Constants.CLEAR_USER_DETAILS}});
    }
}
