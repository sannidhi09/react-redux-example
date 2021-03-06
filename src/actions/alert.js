import { Constants } from '../constants';

function success(message) {
    return {
        type: Constants.ALERT_SUCCESS,
        message
    }
}

function error(message) {
    return {
        type: Constants.ALERT_ERROR,
        message
    }
}

function clear() {
    return {
        type: Constants.ALERT_CLEAR
    }
}

export const alertAction = {
    success,
    error,
    clear
};