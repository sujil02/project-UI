import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import jobReducer from '../reducers/jobReducer';
import JobContainer from "../container/JobSearchContainer";
import {Link, BrowserRouter as Router, Route} from "react-router-dom";
import '../../node_modules/font-awesome/css/font-awesome.css';
import RegisterComponent from "./RegisterComponent";
import mainReducer from '../reducers/JobBoardReducer'
import LoginContainer from '../container/LoginContainer';
import PrivateProfileComponent from "./PrivateProfileComponent";
import PrivateProfileContainer from '../container/PrivateProfileContainer'
import JobDetails from "./JobDetails";



export default class JobBoard extends React.Component{


    render(){
        return(
            <Router>
                {console.log("JOB BOARD")}
                {console.log(this.props)}
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to={'/'}>
                        <img  src="https://picsum.photos/id/0/40/40" className=" navbar-brand rounded-circle"
                              style={{'margin': '0', 'padding':'0'}}/>
                    </Link>
                    <ul className="navbar-nav mr-1 ml-auto">
                        <li className="nav-item nav-link">
                            <Link to={`/login`} >
                                <button className="btn btn-block bg-light">Login</button>
                            </Link>
                        </li>
                        {this.props.isUserLoggedIn &&
                        <li className="nav-item nav-link">
                            <Link to={`/profile`}>
                                <button className="btn btn-block bg-light">Profile</button>
                            </Link>
                        </li>
                        }
                    </ul>
                </div>
                <div className="jumbotron bg-info">
                    <h1>Job Search Application</h1>
                </div>

                <Route exact path={`/login`}
                            render={() => <LoginContainer />}/>
                <Route exact path={`/profile`}
                       render={() => <PrivateProfileContainer />}/>
                <Route exact path={`/register`}
                       render={() => <RegisterComponent />}/>
                <Route exact path={'/'}
                       render={() =><JobContainer/>} />
                <Route exact path={`/jobs/:skill/:loc`}
                       render={(props) => <JobContainer {...props}/>}/>
                <Route exact path={`/jobs/:skill/:loc/positions/:id`}
                       render={(props) => <JobContainer {...props}/>}/>

            </Router>
        );
    };
};
