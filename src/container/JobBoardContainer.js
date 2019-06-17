import {connect} from 'react-redux';
import JobBoard from "../components/JobBoard";

const stateToProperyMapper = state => {
    return {
        user: state.loginReducer.user,
        isUserLoggedIn: state.loginReducer.isUserLoggedIn,
        jobs: state.jobReducer.jobs,
        job: state.jobReducer.job
    }
}

const JobBoardContainer = connect(stateToProperyMapper)(JobBoard);

export default JobBoardContainer;