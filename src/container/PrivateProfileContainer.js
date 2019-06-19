import {connect} from 'react-redux'
import PrivateProfileComponent from "../components/PrivateProfileComponent";
import UserService from '../services/UserService'
let userService = UserService.getInstance();


const stateTOPropertyMapper = state => ({
    loggedInUser: state.loginReducer.user,
    updatedUser: state.privateProfileReducer.user,
    tab: state.privateProfileReducer.tab,
    savedGitJobs : state.privateProfileReducer.savedGitJobs,
    allAddedJobs : state.privateProfileReducer.allAddedJobs,
    followedStudents : state.privateProfileReducer.followedStudents,
    followingStudents : state.privateProfileReducer.followingStudents,
    markedStudents : state.privateProfileReducer.markedStudents

});

const propertyToDispatchMapper = dispatch => ({

    updateUser: (user) => {
        dispatch({
            type: 'UPDATE_USER',
            user: user,
            tab:'PROFILE'
        })
    },

    saveDetails: (user, userId) =>
        userService.updateUser(user, userId)
            .then(result => dispatch({
                type: 'SAVE_USER',
                user: result,
                tab:'PROFILE'
            })),

    getSavedGitJobs: (user) => {

    dispatch({
                 type: 'SAVED_GIT_JOBS',
                 savedGitJobs: [
                     {
                         "id": "3",
                         "type": null,
                         "url": null,
                         "createdAt": null,
                         "company": "Google",
                         "company_url": null,
                         "address": "NY",
                         "title": "ABC",
                         "description": null,
                         "applicationDetails": "aa",
                         "logoDetails": null
                     },
                     {
                         "id": "4",
                         "type": "IT",
                         "url": null,
                         "createdAt": null,
                         "company": "Facebook",
                         "company_url": "facebook.com",
                         "address": "BOSTON",
                         "title": "Software Developer",
                         "description": "Software Developer",
                         "applicationDetails": "Hello",
                         "logoDetails": null
                     }
                 ],
                 user: user,
                 tab: 'SAVED_GIT_JOBS'
             })



},


    getAllAddedJobs: (user) => {

            dispatch({
                type: 'ALL_ADDED_JOBS',
                allAddedJobs: [
                    {
                        "id": "3",
                        "type": null,
                        "url": null,
                        "createdAt": null,
                        "company": "Google",
                        "company_url": null,
                        "address": "NY",
                        "title": "ABC",
                        "description": null,
                        "applicationDetails": "aa",
                        "logoDetails": null
                    },
                    {
                        "id": "4",
                        "type": "IT",
                        "url": null,
                        "createdAt": null,
                        "company": "Facebook",
                        "company_url": "facebook.com",
                        "address": "BOSTON",
                        "title": "Software Developer",
                        "description": "Software Developer",
                        "applicationDetails": "Hello",
                        "logoDetails": null
                    }
                ],
                user: user,
                tab: 'ALL_ADDED_JOBS'
            })



        },

    getMarkedStudents: (user) => {

        dispatch({
            type: 'MARKED_STUDENTS',
            markedStudents: [
                {
                    "id": "3",
                    "type": null,
                    "url": null,
                    "createdAt": null,
                    "company": "Google",
                    "company_url": null,
                    "address": "NY",
                    "title": "ABC",
                    "description": null,
                    "applicationDetails": "aa",
                    "logoDetails": null
                },
                {
                    "id": "4",
                    "type": "IT",
                    "url": null,
                    "createdAt": null,
                    "company": "Facebook",
                    "company_url": "facebook.com",
                    "address": "BOSTON",
                    "title": "Software Developer",
                    "description": "Software Developer",
                    "applicationDetails": "Hello",
                    "logoDetails": null
                }
            ],
            user: user,
            tab: 'MARKED_STUDENTS'
        })



    },

    getFollowedStudents: (user) => {

        dispatch({
            type: 'FOLLOWED_STUDENT',
            followedStudents: [
                {
                    "id": "3",
                    "type": null,
                    "url": null,
                    "createdAt": null,
                    "company": "Google",
                    "company_url": null,
                    "address": "NY",
                    "title": "ABC",
                    "description": null,
                    "applicationDetails": "aa",
                    "logoDetails": null
                },
                {
                    "id": "4",
                    "type": "IT",
                    "url": null,
                    "createdAt": null,
                    "company": "Facebook",
                    "company_url": "facebook.com",
                    "address": "BOSTON",
                    "title": "Software Developer",
                    "description": "Software Developer",
                    "applicationDetails": "Hello",
                    "logoDetails": null
                }
            ],
            user: user,
            tab: 'FOLLOWED_STUDENT'
        })



    },

    getFollowingStudents: (user) => {

        dispatch({
            type: 'FOLLOWING_STUDENT',
            followingStudents: [
                {
                    "id": "3",
                    "type": null,
                    "url": null,
                    "createdAt": null,
                    "company": "Google",
                    "company_url": null,
                    "address": "NY",
                    "title": "ABC",
                    "description": null,
                    "applicationDetails": "aa",
                    "logoDetails": null
                },
                {
                    "id": "4",
                    "type": "IT",
                    "url": null,
                    "createdAt": null,
                    "company": "Facebook",
                    "company_url": "facebook.com",
                    "address": "BOSTON",
                    "title": "Software Developer",
                    "description": "Software Developer",
                    "applicationDetails": "Hello",
                    "logoDetails": null
                }
            ],
            user: user,
            tab: 'FOLLOWING_STUDENT'
        })



    },

    changeTab : (user , tab) => {
        dispatch({
            type: 'CHANGED_TAB',
            user: user,
            tab: tab
        })

    },


});

const PrivateProfileContainer = connect(stateTOPropertyMapper, propertyToDispatchMapper)(PrivateProfileComponent);

export default  PrivateProfileContainer;