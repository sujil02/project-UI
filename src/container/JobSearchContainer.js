import React from 'react'
import JobSearch from '../components/JobSearch'
import {connect} from 'react-redux'
import service from '../services/JobService'
const jobService = service.getInstance();

const stateToPropertyMapper = (state) => ({
    jobs: state.jobReducer.jobs,
    job: state.jobReducer.job,
    isUserLoggedIn: state.loginReducer.isUserLoggedIn,
    loggedInUser: state.loginReducer.user
});

const propertyToDispatchMapper = dispatch => ({

        findAllJobsbyDescriptionAndLocation: (desc, location) =>
            jobService.
            findAllJobsbyDescriptionAndLocation(desc, location)
                .then(jobs => jobService.getLocalJobs(desc, location)
                    .then(result => dispatch({
                        type: 'FIND_JOB_BY_DESC_LOC',
                        jobs: result.concat(jobs)
                    }))
                ),
    findJobById: (job_id, jobs) =>
        jobService
            .findJobById(job_id)
            .then(job =>
                dispatch({
                    type: 'FIND_JOB_BY_ID',
                    job: job,
                    jobs: jobs
                })).catch(

        ),

            reset:() =>
                dispatch({
                    type: 'RESET',
                    jobs: []

                }),


        findAllJobsbyDescriptionAndLocationandid: (desc, location , id) =>
            jobService
                .findAllJobsbyDescriptionAndLocation(desc, location)
                .then(jobs =>jobService.getLocalJobs(desc, location)
            .then(result => jobService.findJobById(id).then(
                    job =>
                        dispatch({
                            type: 'FIND_JOB_BY_ID',
                            job: job,
                            jobs: result.concat(jobs)
                        }))

                )),

        addJob: (job, userId) =>
            jobService.saveGithubJob(job,userId)
                .then(result => dispatch({
                    type: 'SAVE_JOB'
                })),

        findLocalJobs: (skill, location) =>
            jobService.getLocalJobs(skill, location)
                .then(result => dispatch({
                    type: 'FIND_LOCAL_JOBS',
                    jobs: result
                }))
    }




);


const JobContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(JobSearch);

export default JobContainer;