import React from 'react'
import SearchFields from "./SearchFields";
import {BrowserRouter as Router, Route} from "react-router-dom";
import JobDetails from "./JobDetails";



export default class JobSearch extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let cJob = {};
        return(
            <Router>
            <div className="jumbotron bg-info">
                    <h1>Job Search - Prototype</h1>
            </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4" style={{'borderRight':'3px solid black'}}>
                            <SearchFields findAllJobsbyDescriptionAndLocation={this.props.findAllJobsbyDescriptionAndLocation}
                                            jobs={this.props.jobs}
                                            findJobById={this.props.findJobById}/>
                        </div>
                        <div className="col-lg-8 col-md-8">

                                <div>
                                        <Route path={`/positions/:id`}
                                               render={(props) => <JobDetails
                                                                       {...props}
                                                                       job={this.props.job}
                                                                />}/>
                                </div>

                        </div>
                    </div>
                </div>
            </Router>

        )
    }
}