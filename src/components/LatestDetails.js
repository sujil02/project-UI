import React from 'react';
import JobService from '../services/JobService'
import JobRow from "./JobRow";
import {Link, Route} from 'react-router-dom'
import CompanyDetailsComponent from "./CompanyDetailsComponent";
import JobDetails from "./JobDetails";
import UserService from "../services/UserService"
let userService = UserService.getInstance();
let jobService = JobService.getInstance();
export default class LatestDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            jobs: [],
            job: {}
        }
    }
    componentWillMount() {
        // if(this.props.user){
        //     console.log("COMPONENT MOUNTED")
            // userService.getSavedJobsForUsers(this.props.user.id)
            //     .then(result =>
            //         this.setState({
            //             jobs:result
            //         }))
        //     if(!this.props.isUserLoggedIn) {
        //         jobService.getRecentJobs(this.props.user.id)
        //             .then(result => this.setState({
        //                 jobs: result
        //             }))
        //     }else{
        //         userService.getSavedJobsForUsers(this.props.user.id)
        //             .then(result =>
        //                 this.setState({
        //                     jobs:result
        //                 }))
        //     }
        // }
    }

    set_job = (job_id, jobs) => {
        console.log("Dummy" + job_id )
    }

    componentDidMount() {
        if(!this.props.isUserLoggedIn) {
            jobService.getRecentJobs()
                .then(result => this.setState({
                    jobs: result
                }))
        }else{
            userService.getSavedJobsForUsers(this.props.user.id)
                .then(result =>
                    this.setState({
                        jobs:result
                    }))
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.user !== this.props.user){

                if(!this.props.isUserLoggedIn) {
                    jobService.getRecentJobs()
                        .then(result => this.setState({
                            jobs: result
                        }))
                }else{
                    userService.getSavedJobsForUsers(this.props.user.id)
                        .then(result =>
                            this.setState({
                                jobs:result
                            }))
                }
        }
    }


    setJob = (job) => {
        this.setState({
            job: job
        })
    }

    render() {
        return (
            <div>
                <div className="container" style={{'marginBottom':'2em'}}>
                    <div className="row justify-content-center">
                        <div className="card" style={{'width': '80%'}}>

                            {this.props.isUserLoggedIn ? (
                                this.props.user.role === 'STUDENT' ? (
                                    <div className="card-header bg-warning">
                                        <h4>Recently Saved Jobs</h4>
                                    </div>
                                ) : (
                                    <div className="card-header bg-warning">
                                        <h4>Recent Jobs that you posted</h4>
                                    </div>
                                )
                            ) : (
                                <div className="card-header bg-success">
                                    <h4>Recently Posted Jobs on our website</h4>
                                </div>
                            )
                            }
                            <div className="card-body">
                                {/*<JobRow */}
                                {/*        {...this.props}*/}
                                {/*        jobs={this.props.jobs}*/}
                                {/*        findJobById={this.props.findJobById} />*/}
                                {/*         user_logged_in={this.props.isUserLoggedIn}/>*/}
                                {this.state.jobs !== undefined && this.state.jobs.length > 0 ? (
                                    <ul className="list-group">

                                        {this.state.jobs.map((job,index) =>
                                            <div>
                                                {this.props.isUserLoggedIn ? (
                                                    <li className="list-group-item-action list-group-item"
                                                        onClick={() => this.setJob(job)}>
                                                        {job.title} - {job.company}
                                                    </li>
                                                ) : (
                                                    <li className="list-group-item" key={index}>
                                                        <Link to={{
                                                            pathname: '/login',
                                                            state: {
                                                                message: true
                                                            }
                                                        }}>
                                                            {job.title} - {job.company}
                                                        </Link>
                                                    </li>
                                                )}
                                            </div>
                                        )

                                        }
                                    </ul>
                                ) : (
                                    <div className="alert alert-danger" role="alert">
                                        <h4 className="alert-heading ml-auto mr-2">Uh oh!</h4>
                                        {!this.props.isUserLoggedIn ? (
                                            <p>Looks like we couldn't update our feed. Try refreshing the page...</p>
                                        ) : (
                                            <p>Looks like we couldn't find any jobs that you posted or saved.
                                                Please save or add a job and check back here</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/*<Route path={'/job_feed/:job_id'} render={(props) => <CompanyDetailsComponent {...props} job={this.state.job} addFlag={true} />} />*/}
                    </div>
                </div>

                {this.props.isUserLoggedIn &&
                <div>
                    {Object.keys(this.state.job).length > 0 &&
                    <JobDetails job={this.state.job} addJob={false} userId={this.props.user.id} user={this.props.user}
                                findAllJobs={jobService.getSavedJobsForUsers} set_job={this.set_job}/>
                    }
                </div>
                }
            </div>
        )
    }
}
