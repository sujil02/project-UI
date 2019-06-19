import React from 'react'
import JobSearch from '../components/JobSearch'
import {connect} from 'react-redux'
import service from '../services/JobService'
const userService = service.getInstance();

const stateToPropertyMapper = state => ({
    user: state.user,
})

const propertyToDispatchMapper = dispatch => ({

    findUserBycredentials: (username, password) =>
        userService
            .findUserBycredentials(username, password)
            .then(user =>
                dispatch({
                    type: 'FIND_USER_BY_CREDENTIAL',
                    user: user,
                })),

    registerUser: (user) =>
        userService.registerUser(user)
            .then( user =>
                dispatch({
                    type: 'REGISTER_USER',
                    user: user
                })),


});




const UserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(JobSearch);

export default UserContainer;