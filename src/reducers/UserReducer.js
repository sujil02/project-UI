import userService from '../services/UserService'
const service = userService.getInstance();

const UserReducer = (state = {user: []}, action) => {
    switch (action.type) {
        case "FIND_USER_BY_CREDENTIAL":
            return {
                user: action.user
            }
        default:
            return state;
    }
}

export default UserReducer;