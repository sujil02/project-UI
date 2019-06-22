import userService from '../services/UserService'
const service = userService.getInstance();

const AdminReducer = (state = {users: {}}, action) => {
    switch (action.type) {
        case "FIND_ALL_USERS":
        case "DELETE_USERS":
            return {
                users: action.users
            }
        default:
            return state;
    }
}

export default AdminReducer