import { Constants } from '../constants';

const initialstate = {
    logging: false
}

export function login(state= initialstate, action) {
    switch(action.type) {
        case Constants.LOGIN_REQUEST:
            return {
                ...state,
                logging: true
            }
        case Constants.LOGIN_SUCCESS:
            return {
                ...state,
                logging: false
            }
        case Constants.LOGIN_FAILURE:
            return {
                ...state,
                logging: false
            }
        default:
            return state
    }
}