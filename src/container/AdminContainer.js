import React from 'react'
import {connect} from 'react-redux'
import service from '../services/UserService'
import Admin from "../components/Admin";
const userService = service.getInstance();

const stateToPropertyMapper = state => ({
    users: state.AdminReducer.users,
})

const propertyToDispatchMapper = dispatch => ({

    getAllUsers: () =>
        userService
            .getAllUsers()
            .then(users =>
                dispatch({
                    type: 'FIND_ALL_USERS',
                    users: users,
                })),

    deleteUsers: (userId , users) =>
        userService.deleteUser(userId)
            .then( res =>
                dispatch({
                    type: 'DELETE_USERS',
                    users: users.filter(u => u.id !== userId)
                })),




});





const AdminContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(Admin);

export default AdminContainer;