import React from 'react'
import SearchFields from "./SearchFields";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import JobDetails from "./JobDetails";
import {selectIsUserLoggedIn, selectUser} from "../reducers/loginReducer";
import LoginContainer from "../container/LoginContainer";
// import {s} from './JobBoard';


export default class JobSearch extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props.isUserLoggedIn)
        this.state = {
            job : this.props.job
        }
        // this.state = {
        //     isUserLoggedIn : this.props.isUserLoggedIn
        // }
    }

    componentWillMount() {
        console.log(this.props.isUserLoggedIn)
        localStorage.getItem('isUserLoggedIn') && this.setState({
            isUserLoggedIn : localStorage.getItem('isUserLoggedIn')
        })
        // if(window.location.pathname.split("/")[4] === "positions") {
        //
        //     this.props.findJobById(window.location.pathname.split("/")[5] , this.props.jobs)
        //
        // }
        if(window.location.pathname.split("/")[1] === "jobs") {
            this.props.findAllJobsbyDescriptionAndLocationandid(this.props.match.params.skill ,
                this.props.match.params.loc, window.location.pathname.split("/")[5] )
        }

    }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.props.isUserLoggedIn)
        console.log("will update")
        localStorage.setItem('isUserLoggedIn', nextProps.isUserLoggedIn)
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
                                    {...this.props}
                                    findAllJobsbyDescriptionAndLocation={this.props.findAllJobsbyDescriptionAndLocation}
                                    jobs={this.props.jobs}
                                    findJobById={this.props.findJobById}
                                    isUserLoggedIn={localStorage.getItem('isUserLoggedIn')}/>
                            </div>
                            <div className="col-lg-8 col-md-8">

                                {/*{window.location.pathname.split('/')[2] &&*/}
                                <div>

                                    <JobDetails
                                        {...this.props}
                                        job={this.props.job}

                                    />





                                    {/*{console.log(localStorage.getItem('isUserLoggedIn'))}*/}
                                    {/*{localStorage.getItem('isUserLoggedIn') === 'true' &&*/}
                                    {/*<Route path={`/positions/:id`}*/}
                                    {/*       render={(props) => <JobDetails*/}
                                    {/*           {...props}*/}
                                    {/*           job={this.props.job}*/}
                                    {/*       />}/>*/}

                                    {/*{this.state.isUserLoggedIn === 'false' &&*/}
                                    {/*<div>*/}
                                    {/*    <h3>To view details of each job, please log in </h3>*/}
                                    {/*    <Link to={`/login`}> Here. </Link>*/}
                                    {/*</div>*/}

                                    {/*}*/}
                                    {/*}*/}
                                    {/*{this.state.isUserLoggedIn === 'false' &&*/}
                                    {/*<h1>Hello</h1>*/}

                                </div>


                                <div>

                                </div>

                            </div>
                        </div>
                    </div>
                </Router>

            )
        }
}
