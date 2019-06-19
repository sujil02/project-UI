import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import jobReducer from '../reducers/jobReducer';
import JobContainer from "../container/JobSearchContainer";
import {Link, BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import '../../node_modules/font-awesome/css/font-awesome.css';
import RegisterComponent from "./RegisterComponent";
import mainReducer from '../reducers/JobBoardReducer'
import LoginContainer from '../container/LoginContainer';
import PrivateProfileComponent from "./PrivateProfileComponent";
import PrivateProfileContainer from '../container/PrivateProfileContainer'
import JobDetails from "./JobDetails";
import LoginComponent from "./LoginComponent";
import UserSearchComponent from "./UserSearchComponent";
import RegisterUserContainer from "../container/RegisterUserContainer";
import UserService from "../services/UserService"
import JobsContainer from "../container/JobsContainer"
import JobSearchContainer from "../container/JobSearchContainer"
let userService = UserService.getInstance();

export default class JobBoard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchField: "",
            searchResults: [],
            checkUser:{},
            toggleStuff: false
        }
    };
    searchFieldOnChange = (event) => {
        this.setState({
            searchField: event.target.value
        })
    };

    componentWillMount() {
        if(this.props.isUserLoggedIn === undefined){
            this.props.checkIfUserIsLoggedIn()
        }
    }

    render(){
        return(
            <Router>
                {console.log("JOB BOARD")}
                {console.log(this.props)}
                <div className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link to={'/'}>
                        <img  src="https://picsum.photos/id/0/40/40" className=" navbar-brand rounded-circle"
                              style={{'margin': '0', 'padding':'0'}}/>
                    </Link>

                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navbarText"
                            aria-label="Toggle navigation"
                            onClick={() => this.setState({toggleStuff: true})}>
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-1 ml-auto">
                        {!this.props.isUserLoggedIn &&
                            <li className="nav-item nav-link">
                                <Link to={`/login`}>
                                    <button className="btn btn-block bg-light">Login</button>
                                </Link>
                            </li>
                        }
                            <li className="nav-item nav-link">
                                <div className="form-inline">
                                    <input className="form-control" type="text"
                                           placeholder="Search for people"
                                           onChange={(event) => this.searchFieldOnChange(event)}/>
                                    <Link to={`/api/users/${this.state.searchField}`}>
                                        <button className="btn btn-outline-success"
                                                onClick={() => userService.findUsers(this.state.searchField)
                                                    .then(result => this.setState({
                                                        searchResults: result
                                                    }))}>
                                            <i className="fa fa-search" />
                                        </button>
                                    </Link>
                                </div>
                            </li>
                            {
                            this.props.isUserLoggedIn &&
                                <li className="nav-item nav-link">
                                    <Link to={`/profile`}>
                                        <button className="btn bg-light">Profile</button>
                                    </Link>
                                </li>
                                }
                        {
                            this.props.isUserLoggedIn &&
                                <li className="nav-item nav-link">
                                    <Link to={`/`} onClick={() => this.props.logOutUser()}>
                                        <button className="btn bg-light">Log out</button>
                                    </Link>
                                </li>
                        }

                    </ul>
                </div>
                </div>
                <div className="jumbotron bg-info">
                    <h1>Job Search Application</h1>
                </div>


                <Route exact path={`/login`}
                            render={() => <LoginContainer />}/>

                            <Route exact path={`/profile`}
                            render={() => this.props.isUserLoggedIn ?
                                        <PrivateProfileContainer />
                                        :  <Redirect to={`/login`} /> } />


                       <Route exact path={`/register`}
                       render={() => <RegisterUserContainer />}/>

                        <Route exact path={'/'}
                       render={(props) =><JobContainer {...props} isUserLoggedIn = {localStorage.getItem('isUserLoggedIn')}/>} />

                       <Route exact path={`/jobs/:skill/:loc`}
                       render={(props) => <JobContainer {...props}/>}/>

                       <Route path={`/jobs/:skill/:loc/positions/:id`}
                       render={(props) =>
                           <JobContainer {...props}/>
                       }/>

                       <Route exact path={`/job/:skill/:loc/positions/:id`}
                              render={(props) => <JobContainer {...props}/> } />

                       <Route  path={`/api/users/:username`}
                      render={(props) => {
                          return <UserSearchComponent {...props} users={this.state.searchResults}/>}} />

            </Router>
        );
    };
};
