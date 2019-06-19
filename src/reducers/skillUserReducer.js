import userService from '../services/UserService'
let us = userService.getInstance();

const skillUserReducer = (state = {skilledUsers:[]}, action) => {
    switch(action.type) {
        case 'FIND_ALL_SKILLED_USERS':
            return {
                skilledUsers: action.users,
                isUserLoggedIn: true
            };
        default:
            return state;
    }
};


export default skillUserReducer;