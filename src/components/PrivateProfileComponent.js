import React from 'react';
import AddJobComponent from './AddJobComponent'
import {Link} from "react-router-dom";

import JobDetails from "./JobDetails";
import PublicProfileComponent from "./PublicProfileComponent";

class PrivateProfileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            job: null,
            user: {}
        }
        // localStorage.setItem('isUserLoggedIn', this.state.isUserLoggedIn)
        // this.state = {
        //     isUserLoggedIn : this.props.isUserLoggedIn
        // }
    }


    changeTab = (tab_type) => {
        this.setState({
            tab: tab_type
        })

    }

    getclassName = (tab_type) => {
        if (tab_type === this.props.tab) {
            return ("list-group-item active")
        } else {
            return ("list-group-item")
        }


    }
    getSavedGitJobs = () => {
        this.props.getSavedGitJobs(this.props.loggedInUser)
    }

    getAllAddedJobs = () => {
        this.props.getAllAddedJobs(this.props.loggedInUser)
    }

    set_Job = (job_id, jobs) => {
        this.setState({
            job: jobs.find(j => j.id === job_id)
        })
    }

    set_User = (user_id, users) => {
        this.setState({
            user: users.find(u => u.id === user_id)
        })
    }


    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-lg-4 col-md-4">

                        <ul className="list-group">
                            <li className={this.getclassName("PROFILE")}>
                                <button className="btn"
                                        onClick={() => this.props.changeTab(this.props.loggedInUser, "PROFILE")}>
                                    Profile
                                </button>
                            </li>

                            {this.props.loggedInUser.role === "RECRUITER" &&
                            <div>
                                <li className={this.getclassName("ADD_JOB")}>
                                    <button className="btn" onClick={() => {
                                        this.props.changeTab(this.props.loggedInUser, "ADD_JOB")
                                    }}>
                                        Add a Job
                                    </button>
                                </li>

                                    <li className={this.getclassName("ALL_ADDED_JOBS")}>
                                        <button className="btn" onClick= {() => this.props.getAllAddedJobs(this.props.loggedInUser)}>
                                            All Added Jobs
                                            <h6  className={!this.props.allAddedJobs.length && 'd-none'}>
                                                {this.props.allAddedJobs.length} Jobs Added
                                            </h6>
                                        </button>
                                        <ul>
                                        {
                                            this.props.tab === "ALL_ADDED_JOBS" &&
                                            this.props.allAddedJobs.length > 0 &&
                                            this.props.allAddedJobs.map(posting =>

                                                <li className="list-group-item">
                                                    <button className="btn"
                                                            onClick={() => this.set_Job(posting.id,
                                                                this.props.allAddedJobs)}>
                                                        {posting.title}
                                                    </button>
                                                </li>)

                                        }
                                    </ul>

                                </li>

                                {/*        <li className={this.getclassName("MARKED_STUDENTS")}>*/}
                                {/*    <button className="btn" onClick={() => this.props.changeTab(this.props.loggedInUser,"MARKED_STUDENTS")} >*/}
                                {/*        Marked Students*/}
                                {/*    </button>*/}
                                {/*</li>*/}


                                    <li className={this.getclassName("MARKED_STUDENTS")}>
                                        <button className="btn" onClick= {() => this.props.getMarkedStudents(this.props.loggedInUser , "MARKED_STUDENTS" )}>
                                            Marked Students
                                            <h6  className={!this.props.markedStudents.length && 'd-none'}>
                                                {this.props.markedStudents.length} Students Marked
                                            </h6>
                                        </button>
                                        <ul>
                                        {
                                            this.props.tab === "MARKED_STUDENTS" &&
                                            this.props.markedStudents.length > 0 &&
                                            this.props.markedStudents.map(user =>

                                                <li className="list-group-item">
                                                    <button className="btn"
                                                            onClick={() => this.set_User(user.id, this.props.markedStudents)}>
                                                        {user.firstName} {user.lastName}
                                                    </button>
                                                </li>)

                                        }
                                    </ul>
                                </li>


                            </div>
                            }

                            {this.props.loggedInUser.role === "STUDENT" &&

                            <div>

                                <li className={this.getclassName("SAVED_GIT_JOBS")}>
                                    <button className="btn" onClick= {() => this.props.getSavedGitJobs(this.props.loggedInUser)}>
                                    All Saved Jobs
                                        <h6  className={!this.props.savedGitJobs.length && 'd-none'}>
                                            {this.props.savedGitJobs.length} Jobs Saved
                                        </h6>
                                </button>

                                    <ul>
                                    {
                                    this.props.tab === "SAVED_GIT_JOBS" &&
                                    this.props.savedGitJobs.length > 0 &&
                                    this.props.savedGitJobs.map(posting =>

                                                <li className="list-group-item">
                                                    <button className="btn"
                                                            onClick={() => this.set_Job(posting.id, this.props.savedGitJobs)}>
                                                        {posting.title}
                                                    </button>
                                                </li>)

                                        }
                                    </ul>

                                </li>

                                <li className={this.getclassName("FOLLOWING_STUDENT")}>
                                    <button className="btn" onClick= {() => this.props.getFollowingStudents(this.props.loggedInUser , "FOLLOWING_STUDENT" )}>
                                        Following
                                        <h6  className={!this.props.followingStudents.length && 'd-none'}>
                                            Following {this.props.followingStudents.length} Users
                                        </h6>
                                    </button>
                                    {
                                        this.props.tab === "FOLLOWING_STUDENT" &&
                                        this.props.followingStudents.length > 0 &&
                                        this.props.followingStudents.map(user =>

                                            <div className="list-group-item">
                                                <button
                                                    onClick={() => this.set_User(user.id, this.props.followingStudents)}>
                                                    {user.title}
                                                </button>
                                            </div>)

                                    }

                                </li>

                                <li className={this.getclassName("FOLLOWED_STUDENT")}>
                                    <button className="btn"
                                            onClick={() => this.props.getFollowedStudents(this.props.loggedInUser, "FOLLOWED_STUDENT")}>
                                        Followed Students
                                        <h6  className={!this.props.followedStudents.length && 'd-none'}>
                                            Followed By {this.props.followedStudents.length} Users
                                        </h6>
                                    </button>
                                    <ul>
                                        {
                                            this.props.tab === "FOLLOWED_STUDENT" &&
                                            this.props.followedStudents.length > 0 &&
                                            this.props.followedStudents.map(user =>

                                                <li className="list-group-item">
                                                    <button className="btn"
                                                            onClick={() => this.set_User(user.id, this.props.followedStudents)}>
                                                        {user.firstName} {user.lastName}
                                                    </button>
                                                </li>)

                                        }
                                    </ul>
                                </li>
                            </div>
                            }

                        </ul>

                        {/*  PLACE SOME EXTRA INFO RELATED TO PROFILE HERE  */}
                    </div>


                    <div className="col-lg-8 col-md-8">

                        {this.props.tab === "PROFILE" &&
                        <div className="card">
                            <div className="card-header">
                                <h4>Personal Profile Details</h4>
                                {console.log("PROFILE")}
                                {console.log(this.props)}
                                {console.log(this.state)}
                            </div>
                            <div className="card-body">
                                <div className="form">
                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Username
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   placeholder={this.props.loggedInUser.username}
                                                   readOnly/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            First Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   value={this.props.updatedUser.firstName != null ?
                                                       this.props.updatedUser.firstName : this.props.loggedInUser.firstName}
                                                   type="text"
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           firstName: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Last Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   type="text"
                                                   value={this.props.updatedUser.lastName != null ? this.props.updatedUser.lastName : this.props.loggedInUser.lastName}
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           lastName: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Password
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   type="password"
                                                   value={this.props.updatedUser.password != null ? this.props.updatedUser.password : this.props.loggedInUser.password}
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           password: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Email
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   type="email"
                                                   value={this.props.updatedUser.email != null ? this.props.updatedUser.email : this.props.loggedInUser.email}
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           email: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Account Type
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   placeholder={this.props.loggedInUser.role}
                                                   readOnly/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success btn-block"
                                        onClick={() => this.props.saveDetails(this.props.updatedUser, this.props.loggedInUser.id)}>
                                    Save Details
                                </button>
                            </div>
                            <br/>


                        </div>
                        }

                        {
                            this.props.tab === "ADD_JOB"
                            &&

                            <AddJobComponent props={this.props}/>

                        }

                        {
                            this.props.tab === "ALL_ADDED_JOBS" &&
                            this.state.job !== null &&

                            <JobDetails job={this.state.job}/>

                        }

                        {
                            this.props.tab === "SAVED_GIT_JOBS" &&
                            this.state.job !== null &&
                                <JobDetails job={this.state.job}/>
                        }

                        {
                            this.props.tab === "MARKED_STUDENTS"
                            && Object.keys(this.state.user).length > 0 &&
                            <PublicProfileComponent user={this.state.user}/>
                        }

                        {
                            this.props.tab === "FOLLOWED_STUDENT"
                            && Object.keys(this.state.user).length > 0 &&
                            <PublicProfileComponent user={this.state.user}/>
                        }

                        {/*{*/}
                        {/*    this.props.tab === "MARKED_STUDENTS"&&*/}
                        {/*    this.state.user !== null &&*/}
                        {/*    <div>*/}
                        {/*    <p>{this.state.user}</p>*/}
                        {/*    </div>*/}
                        {/*}*/}

                        {/*{*/}
                        {/*    this.props.tab === "FOLLOWED_STUDENT"&&*/}
                        {/*    this.state.user !== null &&*/}
                        {/*    <div>*/}
                        {/*        <p>{this.state.user}</p>*/}
                        {/*    </div>*/}
                        {/*}*/}

                        {/*{*/}
                        {/*    this.props.tab === "FOLLOWING_STUDENT"&&*/}
                        {/*    this.state.user !== null &&*/}
                        {/*    <div>*/}
                        {/*        <p>{this.state.user}</p>*/}
                        {/*    </div>*/}
                        {/*}*/}



                    </div>


                </div>
            </div>
        )
    }

}

export default PrivateProfileComponent;