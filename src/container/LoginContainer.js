import userService from '../services/UserService'
import {connect} from 'react-redux';
import {selectIsUserLoggedIn, selectUser} from "../reducers/loginReducer";
import LoginComponent from '../components/LoginComponent';
let us = userService.getInstance();

const stateToPropertyMapper = state => ({
    user: state.loginReducer.user,
    // user: selectUser(state),
    isUserLoggedIn: state.loginReducer.isUserLoggedIn
});

const propertyToDispatchMapper = dispatch => ({
    loginUser: (user) => us.findUserBycredentials(user)
        .then(result => dispatch({
                type: 'LOGIN_USER',
                user: result,
                isUserLoggedIn: true
            }
        ))
        .catch( () => dispatch({
            type: 'FAILED',
            isUserLoggedIn: false
        })),
});

const LoginContainer = connect(stateToPropertyMapper, propertyToDispatchMapper)(LoginComponent);

export default  LoginContainer;


