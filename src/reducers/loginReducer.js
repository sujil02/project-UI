import userService from '../services/UserService'
let us = userService.getInstance();

const loginReducer = (state = {user:{}}, action) => {
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
        case 'CHECK_USER':
            return{
                user: action.user,
                isUserLoggedIn: Object.keys(action.user).length !== 0 && action.user !== undefined
            };
        case 'LOG_OUT':
            return{
                user: action.user,
                isUserLoggedIn: false
            }
        default:
            return state;
    }
};
export const selectIsUserLoggedIn = (state) =>{
    return state.isUserLoggedIn;
}

export const selectUser = (state) => {
    return state.user;
}


export default loginReducer;