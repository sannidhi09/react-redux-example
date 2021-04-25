
import { Constants } from '../constants';
import { userService } from '../service';
import { history } from '../helpers';

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

function loginFailure(errorMsg) {
    return {
        type: Constants.LOGIN_FAILURE,
        error: errorMsg
    }
}

export function login(username, password) {
    return dispatch => {
        dispatch(loginRequest());

        userService.login(username, password).then(
            userDetails => {
                console.log(userDetails);
                dispatch(loginSucess());
                history.push('/');
            }, error => {
                dispatch(loginFailure(error.toString()));
            }
        );
    }
}

export function logout() {
    userService.logout();
    return { type: Constants.LOGOUT };
}
