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
            postings:[]

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





    render(){
        return(
            <div>
            <div className="justify-content-center">
                    <div className="form-group">
                        <label htmlFor="job-title">
                            Job Skill
                        </label>
                        <input type="input" className="form-control" id="job-title"
                        onChange={this.handleChangeJobTitle}
                        defaultValue= {window.location.pathname.split("/")[2]}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="job-location">
                            Preferred Location
                        </label>
                        <input type="input" className="form-control" id="job-location"
                        onChange={this.handleChangeJobLocation}
                               defaultValue = {window.location.pathname.split("/")[3]}/>
                    </div>

                    <div className="form-group">
                        <Link to={`/jobs/${this.state.job}/${this.state.location}`}
                              className="btn btn-block btn-success"
                              onClick={() => {this.props.findAllJobsbyDescriptionAndLocation(this.state.job, this.state.location);}}>
                            Search Jobs
                        </Link>
                    </div>
                        { this.props.jobs.length > 0  &&

                                    <JobRow skill = {this.state.job}
                                            loc = {this.state.location}
                                            {...this.props}
                                            jobs={this.props.jobs}
                                            findJobById={this.props.findJobById}/>
                        }


            </div>
            </div>
        )
    }
}