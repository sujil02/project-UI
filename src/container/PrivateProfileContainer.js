import {connect} from 'react-redux'
import PrivateProfileComponent from "../components/PrivateProfileComponent";
import UserService from '../services/UserService'
let userService = UserService.getInstance();


const stateTOPropertyMapper = state => ({
    loggedInUser: state.loginReducer.user,
    updatedUser: state.privateProfileReducer.user
});

const propertyToDispatchMapper = dispatch => ({

    updateUser : (user) => {
        dispatch({
            type: 'UPDATE_USER',
            user: user
        })
    },

    saveDetails: (user, userId) =>
        userService.updateUser(user, userId)
            .then(result => dispatch({
                type: 'SAVE_USER',
                user: result
            }))

});

const PrivateProfileContainer = connect(stateTOPropertyMapper, propertyToDispatchMapper)(PrivateProfileComponent);

export default  PrivateProfileContainer;