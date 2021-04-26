import { Constants } from '../constants';

export function alert(state={}, action) {
    switch(action.type) {
        case Constants.ALERT_SUCCESS:
            return {
                type: 'success',
                message: action.message
            }
        case Constants.ALERT_ERROR:
            return {
                type: 'danger',
                message: action.message
            }
        case Constants.ALERT_CLEAR:
            return {}
        default:
            return state
    }
}
