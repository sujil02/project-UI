import {connect} from 'react-redux'
import RegisterComponent from "../components/RegisterComponent";
import UserService from '../services/UserService'
let userService = UserService.getInstance();


const stateTOPropertyMapper = state => ({
    user: state.registerUserReducer.user
});

const propertyToDispatchMapper = dispatch => ({

    updateUser : (user) => {
        dispatch({
            type: 'UPDATE_USER',
            user: user
        })
    },

    register: (user) =>
        userService.registerUser(user)
            .then(result => dispatch({
                type: 'SAVED_USER',
                user: result
            }))

});

const RegisterUserContainer = connect(stateTOPropertyMapper, propertyToDispatchMapper)(RegisterComponent);

export default  RegisterUserContainer;