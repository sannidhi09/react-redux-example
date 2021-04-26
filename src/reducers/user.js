import { Constants } from '../constants';

const initialstate = {
    username: '',
    firstname: '',
    lastname: ''
}

export function user(state = initialstate, action) {
    switch(action.type) {
        case Constants.UPDATE_USER_DETAILS:
            return {
                ...state,
                username: action.userDetails.username,
                firstname: action.userDetails.firstname,
                lastname: action.userDetails.lastname
            }
        case Constants.CLEAR_USER_DETAILS:
            return {
                ...initialstate
            }
        default:
            return state
    }
}