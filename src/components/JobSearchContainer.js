import React from 'react'
import SearchFields from "./SearchFields";
import {Link, BrowserRouter as Router, Route} from "react-router-dom";
import JobDetails from "./JobDetails";

export default class JobSearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            test: 1
        }
    }

    render(){
        return(
            <Router>
            <div className="jumbotron bg-info">
                    <h1>Job Search - Prototype</h1>
            </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6" style={{'borderRight':'3px solid black'}}>
                            <SearchFields  />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Route path={`/positions/:id`}
                                   render={(props) => <JobDetails
                                                    {...props}
                                                    id={props.match.params.id}/>} />
                        </div>
                    </div>
                </div>
            </Router>

        )
    }
}