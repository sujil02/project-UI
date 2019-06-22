import React from 'react'
import JobSearch from '../components/JobSearch'
import JobDetails from '../components/JobDetails'
import {connect} from 'react-redux'
import service from '../services/JobService'
import JobRow from "../components/JobRow";
const jobService = service.getInstance();

const stateToPropertyMapper = state => ({
    jobs: state.jobs,
    job:state.job
})

const propertyToDispatchMapper = dispatch => ({


        // findJobById: (job_id, jobs) =>
        //     jobService
        //         .findJobById(job_id)
        //         .then(job =>
        //             dispatch({
        //                 type: 'FIND_JOB_BY_ID',
        //                 job: job,
        //                 jobs: jobs
        //             })),

    }
)




const JobsContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(JobDetails);

export default JobsContainer;