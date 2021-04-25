import { Constants } from '../constants';
import { userService } from '../service';
import { history } from '../helpers';

function request() { 
    return { 
        type: Constants.REGISTER_REQUEST
    } 
}

function requestSuccess() {
    return {
        type: Constants.REGISTER_SUCCESS
    }
}

function requestfailure() {
    return {
        type: Constants.REGISTER_FAILURE
    }
}

function register (userDetails){
    return dispatch => {
        dispatch(request());

        userService.register(userDetails).then(
            userDetails => {
                dispatch(requestSuccess());
                history.push('/login');

            },
            error => {
                dispatch(requestfailure());
            }
        )
    }
}

export const regActions = {
    register
}