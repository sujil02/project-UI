import React from 'react'
import SearchFields from "./SearchFields";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import JobDetails from "./JobDetails";
import {selectIsUserLoggedIn, selectUser} from "../reducers/loginReducer";
import LoginContainer from "../container/LoginContainer";
import JobsContainer from "../container/JobsContainer";
import LoginComponent from "./LoginComponent";
import JobRow from "./JobRow";
// import {s} from './JobBoard';


export default class JobSearch extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            job : this.props.job,
        }

        // localStorage.setItem('isUserLoggedIn', this.state.isUserLoggedIn)
        // this.state = {
        //     isUserLoggedIn : this.props.isUserLoggedIn
        // }
    }

    // componentWillMount() {
    //     if(window.location.pathname.split("/")[1] === "jobs") {
    //         this.props.findAllJobsbyDescriptionAndLocationandid(this.props.match.params.skill ,
    //             this.props.match.params.loc, window.location.pathname.split("/")[5] )
    //     }
    //     // if(window.location.pathname.split("/")[4] === "positions") {
    //     //
    //     //     this.props.findJobById(window.location.pathname.split("/")[5] , this.props.jobs)
    //     //
    //     // }
    // }


    componentWillMount() {
        if(window.location.pathname.split("/")[4] === "positions") {
            this.props.findAllJobsbyDescriptionAndLocationandid(this.props.match.params.skill ,
                this.props.match.params.loc, window.location.pathname.split("/")[5] )
        }
        else if(window.location.pathname.split("/")[1] === "search") {

            this.props.findAllJobsbyDescriptionAndLocation(this.props.match.params.skill ,
                this.props.match.params.loc)

        }

        this.props.reset();
    }


    componentWillUpdate(nextProps, nextState) {


    }




    render() {
            return (
                <div>
                    <div className="container-fluid">
                        {console.log("JOB SEARCH")}
                        {console.log(this.props )}

                        <div className="row">
                            <div className="col-lg-4 col-md-4" style={{'borderRight': '3px solid black'}}>
                                <SearchFields
                                    {...this.props}
                                    findAllJobsbyDescriptionAndLocation={this.props.findAllJobsbyDescriptionAndLocation}
                                    jobs={this.props.jobs}
                                    findJobById={this.props.findJobById}
                                    isUserLoggedIn={this.props.isUserLoggedIn}/>


                            </div>
                            <div className="col-lg-8 col-md-8">

                                {/*{window.location.pathname.split('/')[2] &&*/}
                                <div>
                                    {/*<Route exact path={`/jobs/:skill/:loc/positions/:id`}*/}
                                    {/*       render={(props) => { return (this.props.isUserLoggedIn ?*/}
                                    {/*           <JobsContainer {...props} job={}/>*/}
                                    {/*           : <LoginComponent /> )*/}
                                    {/*       }}/>*/}

                                    {this.props.isUserLoggedIn === true ? (
                                        < JobDetails
                                            {...this.props}
                                            job={this.props.job}
                                        />
                                    ) : (
                                        <div>
                                            {/*{this.props.job &&*/}
                                            {/*    <h4>*/}
                                            {/*        Hmm, looks like you are not logged in, please log in or sign up*/}
                                            {/*        to view the job description*/}
                                            {/*        /!*<Redirect to={{path: '/login',*!/*/}
                                            {/*        /!*        state:{from: this.props.match.location}}} >*!/*/}
                                            {/*        /!*    Here.*!/*/}
                                            {/*        /!*</Redirect>*!/*/}

                                            {/*        <LoginContainer/>*/}
                                            {/*    </h4>*/}
                                            {/*}*/}
                                        </div>

                                    )
                                    }





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
                </div>

            )
        }
}
