import { Constants } from '../constants';

const initialstate = {
    registering: false
}

export function register(state = initialstate, action) {
    switch(action.type) {
        case Constants.REGISTER_REQUEST:
            return {
                ...state,
                registering: true
            }
        case Constants.REGISTER_SUCCESS:
            return { 
                ...state,
                registering: false
            }
        case Constants.REGISTER_FAILURE:
            return {
                ...state,
                registering: false
            }
        default:
            return state
    }
}