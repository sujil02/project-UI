import React from 'react'
import JobSearch from '../components/JobSearch'
import {connect} from 'react-redux'
import service from '../services/JobService'
const jobService = service.getInstance();

const stateToPropertyMapper = (state) => ({
    jobs: state.jobReducer.jobs,
    job: state.jobReducer.job,
    isUserLoggedIn: state.loginReducer.isUserLoggedIn
});

const propertyToDispatchMapper = dispatch => ({

    findAllJobsbyDescriptionAndLocation: (desc, location) =>
        jobService
            .findAllJobsbyDescriptionAndLocation(desc, location)
            .then(jobs =>
                dispatch({
                    type: 'FIND_JOB_BY_DESC_LOC',
                    jobs: jobs,
                })),

    findJobById: (job_id, jobs) =>
        jobService
            .findJobById(job_id)
            .then(job =>
                dispatch({
                    type: 'FIND_JOB_BY_ID',
                    job: job,
                    jobs: jobs
                })),

            reset:() =>
                dispatch({
                    type: 'RESET',
                    jobs: []

                }),
        findAllJobsbyDescriptionAndLocationandid: (desc, location , id) =>
            jobService
                .findAllJobsbyDescriptionAndLocation(desc, location)
                .then(jobs =>jobService.findJobById(id).then(
                    job =>
                        dispatch({
                            type: 'FIND_JOB_BY_ID',
                            job: job,
                            jobs: jobs
                        }))

                )
    }




);


const JobContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(JobSearch);

export default JobContainer;