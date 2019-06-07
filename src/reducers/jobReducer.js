import jobService from '../services/JobService'
const service = jobService.getInstance();

const jobReducer = (state = {jobs: [], job: []}, action) => {
    switch (action.type) {
        case "FIND_JOB_BY_DESC_LOC":
            return {
                jobs: action.jobs
            }
        case "FIND_JOB_BY_ID":
            return{
                job:action.job
            }
        default:
            return state;
    }
}

export default jobReducer;