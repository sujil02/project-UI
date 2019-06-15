import React from 'react'
import SearchFields from "./SearchFields";
import {BrowserRouter as Router, Route} from "react-router-dom";
import JobDetails from "./JobDetails";



export default class JobSearch extends React.Component{
    constructor(props){
        super(props);

    }

    componentWillMount() {

    }

    render(){
        return(
            <Router>
                <div className="container-fluid">
                    {console.log("JOB SEARCH")}
                    {console.log(this.props)}
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