import React from 'react'
import {connect} from 'react-redux'
import SkillSearch from '../components/SkillSearch'
import UserService from '../services/UserService'
let userService = UserService.getInstance();


const stateToPropertyMapper = (state) => ({
        skilledUsers: state.skillUserReducer.skilledUsers,
        isUserLoggedIn: state.loginReducer.isUserLoggedIn
});


const propertyToDispatchMapper = dispatch => ({

    getSkilledUsers: (skill) =>
        userService
            .getSkilledUsers(skill)
            .then(users =>
                dispatch({
                    type: 'FIND_ALL_SKILLED_USERS',
                    users: users,
                }))
});


const SkillSearchContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(SkillSearch);

export default SkillSearchContainer;