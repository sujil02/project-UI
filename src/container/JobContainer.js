import React from 'react'
import JobSearch from '../components/JobSearch'
import {connect} from 'react-redux'
import service from '../services/JobService'
const jobService = service.getInstance();

const stateToPropertyMapper = state => ({
    jobs: state.jobs,
    job:state.job
})

const propertyToDispatchMapper = dispatch => ({

    findAllJobsbyDescriptionAndLocation: (desc, location) =>
        jobService
            .findAllJobsbyDescriptionAndLocation(desc, location)
            .then(jobs =>
                dispatch({
                    type: 'FIND_JOB_BY_DESC_LOC',
                    jobs: jobs,
                })),

    findJobById: (job_id) => {
        jobService
            .findJobById(job_id)
            .then(job =>
                dispatch({
                    type: 'FIND_JOB_BY_ID',
                    job: job,
                }))},

    }
)




const JobsListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(JobSearch);

export default JobsListContainer;