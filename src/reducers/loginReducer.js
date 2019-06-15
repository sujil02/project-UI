import userService from '../services/UserService'
let us = userService.getInstance();

const loginReducer = (state = {user:{}, isUserLoggedIn:false}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {
                user: action.user,
                isUserLoggedIn: true
            };
        case 'FAILED':
            return {
                user: state.user,
                isUserLoggedIn: false
            };
        default:
            return state;
    }
};

export const selectIsUserLoggedIn = (state) =>
    state.isUserLoggedIn;

export default loginReducer;