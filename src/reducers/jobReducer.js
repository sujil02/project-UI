import jobService from '../services/JobService'
const service = jobService.getInstance();

const jobReducer = (state = {jobs: []}, action) => {
    switch (action.type) {
        case "FIND_JOB_BY_DESC_LOC":
            return {
                jobs: action.jobs,

            };
        case "FIND_JOB_BY_ID":
        case "RESET":
            return{
                job:action.job,
                jobs:action.jobs
            };
        case 'SAVE_JOB':
            return{
                job:state.job,
                jobs:state.jobs
            };
        default:
            return state;
    }
}


export default jobReducer;