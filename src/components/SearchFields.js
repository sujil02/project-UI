import React from 'react';
import JobRow from './JobRow'
import {Link, BrowserRouter as Router, Route} from "react-router-dom";

export default class SearchFields extends React.Component{

    constructor(props) {
        super(props);
        this.handleChangeJobTitle = this.handleChangeJobTitle.bind(this);
        this.handleChangeJobLocation = this.handleChangeJobLocation.bind(this);
        this.state={
            job: '',
            location:'',
            postings:[],
            required: false

    }
    }

    componentDidMount() {
        if(this.props.match.params.skill ){
            console.log("FOUND PREVIOUS SKILL")
            this.setState({
                job: this.props.match.params.skill
            })
        }
        if(this.props.match.params.loc ){
            console.log("FOUND PREVIOUS JOB")
            this.setState({
                location: this.props.match.params.loc
            })
        }
    }

    handleChangeJobTitle(event){
        this.setState({
            job: event.target.value
        })

    }

    handleChangeJobLocation(event){
        this.setState({
            location: event.target.value
        })

    }

    handleFormSubmit = () => {
        if(this.state.job !== '' || this.state.location !== ''){
            this.setState({
                required: true
            })
            (this.props.findAllJobsbyDescriptionAndLocation(this.state.job, this.state.location));
        }
    }




    render(){
        return(
            <div>
            <form className="justify-content-center">
                    <div className="form-group">
                        <label htmlFor="job-title">
                            Job Skill
                        </label>
                        <input type="input" className="form-control" id="job-title"
                        onChange={this.handleChangeJobTitle}
                        defaultValue= {window.location.pathname.split("/")[2]}
                        required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="job-location">
                            Preferred Location
                        </label>
                        <input type="input" className="form-control" id="job-location"
                        onChange={this.handleChangeJobLocation}
                               defaultValue = {window.location.pathname.split("/")[3]}
                        required/>
                    </div>

                    <div className="form-group">

                        <Link to={`/search/${this.state.job}/${this.state.location}`}
                              className="btn btn-block btn-outline-success"
                              onClick={() =>{
                              this.props.findAllJobsbyDescriptionAndLocation(this.state.job, this.state.location)}} >
                            Search Jobs
                        </Link>

                    </div>
                {
                    this.props.loggedInUser!== null && this.props.loggedInUser.role === "RECRUITER" &&
                    <div >
                        <Link to={`/recruiter`}>
                            <button className="btn btn-warning btn-block">
                                Recruiting? Find applicants based on skill..
                            </button>
                        </Link>
                    </div>
                }
                        { this.props.jobs.length > 0  &&

                                    <JobRow skill = {this.state.job}
                                            loc = {this.state.location}
                                            {...this.props}
                                            jobs={this.props.jobs}
                                            findJobById={this.props.findJobById}
                                    user_logged_in={this.props.isUserLoggedIn}/>
                        }


            </form>
            </div>
        )
    }
}