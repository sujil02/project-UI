import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import jobReducer from '../reducers/jobReducer';
import JobContainer from "../container/JobSearchContainer";
import {Link, BrowserRouter as Router, Route} from "react-router-dom";
import LoginComponent from './LoginComponent';
import '../../node_modules/font-awesome/css/font-awesome.css';

const store = createStore(jobReducer);

export default class JobBoard extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <Router>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#" style={{'margin': '0', 'padding':'0'}}>
                        <img src="https://picsum.photos/id/0/40/40" className="rounded-circle"/>
                    </a>
                    <div className="mr-1 ml-auto">
                        <Link to={`/login`} >
                            <button className="btn btn-block bg-light">Login</button>
                        </Link>
                    </div>
                </div>
                <div className="jumbotron bg-info">
                    <h1>Job Search - Prototype</h1>
                </div>

                <Route exact path={`/login`}
                            render={() => <LoginComponent />}/>
                <Route exact path={'/'}
                       render={() =><JobContainer />} />
            </Router>
            </Provider>
        );
    };
};