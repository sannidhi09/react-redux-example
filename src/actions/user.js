import { Constants } from '../constants';
import { userService } from '../service';
import { alertAction } from './alert';


function userdetailsupdate(userDetails) {
    return {
        type: Constants.UPDATE_USER_DETAILS,
        userDetails
    }
}

export function getCurrentUserDetails() {
    return dispatch => {
        const username = userService.getCurrentUser();
        userService.getByUsername(username).then(
            userdetails => {
                dispatch(userdetailsupdate(userdetails))
                console.log(userdetails);
            }, error => {
                dispatch(alertAction.error(error.toString()));
            }
        )
    }
}