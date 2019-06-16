import React from 'react'
import SearchFields from "./SearchFields";
import {BrowserRouter as Router, Route} from "react-router-dom";
import JobDetails from "./JobDetails";
import {selectIsUserLoggedIn, selectUser} from "../reducers/loginReducer";
import LoginContainer from "../container/LoginContainer";
// import {s} from './JobBoard';


export default class JobSearch extends React.Component{
    constructor(props){
        super(props);


    }

    componentWillMount() {

    }

    render() {
            return (
                <Router>
                    <div className="container-fluid">
                        {console.log("JOB SEARCH")}
                        {console.log(this.props)}
                        {console.log("state")}
                        {console.log(this.state)}
                        {/*{console.log(this.props.isUserLoggedIn)}*/}

                        <div className="row">
                            <div className="col-lg-4 col-md-4" style={{'borderRight': '3px solid black'}}>
                                <SearchFields
                                    findAllJobsbyDescriptionAndLocation={this.props.findAllJobsbyDescriptionAndLocation}
                                    jobs={this.props.jobs}
                                    findJobById={this.props.findJobById}/>
                            </div>
                            <div className="col-lg-8 col-md-8">

                                <div>
                                    {this.props.isUserLoggedIn === true ? (
                                        <Route path={`/positions/:id`}
                                               render={(props) => <JobDetails
                                                   {...props}
                                                   job={this.props.job}
                                               />}/>
                                    ) : (
                                        <Route exact path={`/login`}
                                               render={() => <LoginContainer loginMessage={this.props.isUserLoggedIn}/>}/>
                                    )
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </Router>

            )
        }
}
