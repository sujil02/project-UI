import {connect} from 'react-redux';
import JobBoard from "../components/JobBoard";
import UserService from '../services/UserService';
let userService = UserService.getInstance();

const stateToProperyMapper = state => {
    return {
        user: {...state.loginReducer.user, ...state.privateProfileReducer.user},
        isUserLoggedIn: state.loginReducer.isUserLoggedIn,
        jobs: state.jobReducer.jobs,
        job: state.jobReducer.job,

    }
};

const propertyToDispatchMapper = dispatch => ({
    checkIfUserIsLoggedIn: () =>  userService.checkIfUserLoggedIn()
        .then(result => dispatch({
            user: result.length ? JSON.parse(result) : {},
            type:'CHECK_USER'
        })),

    logOutUser: () => userService.logOutUser()
        .then(result => dispatch({
            user: null,
            type: 'LOG_OUT'
        }))
});


const JobBoardContainer = connect(stateToProperyMapper,propertyToDispatchMapper)(JobBoard);

export default JobBoardContainer;