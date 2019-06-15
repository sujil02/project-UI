import userService from '../services/UserService'
import {connect} from 'react-redux';
import {selectIsUserLoggedIn} from "../reducers/loginReducer";
import LoginComponent from '../components/LoginComponent';
let us = userService.getInstance();

const stateToPropertyMapper = (state) => ({
    user: state.loginReducer.user,
    isUserLoggedIn: selectIsUserLoggedIn(state)
});

const propertyToDispatchMapper = dispatch => ({
    loginUser: (user) => us.findUserBycredentials(user)
        .then(result => dispatch({
                type: 'LOGIN_USER',
                user: result,
                isUserLoggedIn: true
            }
        )).catch( () => dispatch({
            type: 'FAILED',
            isUserLoggedIn: false
        })),
});

const LoginContainer = connect(stateToPropertyMapper, propertyToDispatchMapper)(LoginComponent);

export default  LoginContainer;


