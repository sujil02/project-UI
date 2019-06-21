import React from 'react';
import {Link} from "react-router-dom";
import UserService from '../services/UserService'
let  userService = UserService.getInstance();

export default class extends React.Component {
    render(){
        return(
            <div className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to={'/index'}>
                    <img  src="https://picsum.photos/id/20/40/40" className=" navbar-brand rounded-top rounded-bottom"
                          style={{'margin': '0', 'padding':'0', 'border':'1px solid white'}}/>
                </Link>

                <button className="navbar-toggler" type="button"
                        data-toggle="collapse"
                        data-target="#navbarText"
                        aria-label="Toggle navigation"
                        onClick={() => this.setState({toggleStuff: true})}>
                    <span className="navbar-toggler-icon" />
                </button>

                <ul className="navbar-nav">
                    <li className="nav-item nav-link">
                        <Link to={`/index`}>
                            <button className="btn btn-outline-light"> Home </button>
                        </Link>
                    </li>
                    <Link to={`/companies`} >
                        <li className="nav-item nav-link">
                            <button className="btn btn-outline-light"> Search Companies </button>
                        </li>
                    </Link>
                </ul>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-1 ml-auto">

                        <li className="nav-item nav-link">
                            <div className="form-inline">
                                <input className="form-control" type="text"
                                       placeholder="Search for people"
                                       onChange={(event) => this.searchFieldOnChange(event)}/>
                                <Link to={`/api/users/${this.state.searchField}`}>
                                    <button className="btn btn-outline-success"
                                            onClick={() => userService.findUsers(this.state.searchField)
                                                .then(result =>
                                                {this.props.user &&
                                                this.setState({
                                                    searchResults: result.filter(currUser =>
                                                        currUser.username !== this.props.user.username)
                                                })})}>
                                        <i className="fa fa-search" />
                                    </button>
                                </Link>
                            </div>
                        </li>
                        {!this.props.isUserLoggedIn &&
                        <li className="nav-item nav-link">
                            <Link to={`/login`}>
                                <button className="btn btn-block bg-light">Login</button>
                            </Link>
                        </li>
                        }
                        {!this.props.isUserLoggedIn &&
                        <li className="nav-item nav-link">
                            <Link to={`/register`}>
                                <button className="btn btn-block bg-light">Register</button>
                            </Link>
                        </li>
                        }
                        {
                            this.props.isUserLoggedIn &&
                            <li className="nav-item nav-link">
                                <Link to={`/profile`}>
                                    <button className="btn bg-transparent btn-outline-success">
                                        {this.props.user.username}
                                        <i className="fa fa-user-circle"
                                           style={{'marginLeft':'0.2em', 'borderLeft':'2px solid green',
                                               'paddingLeft':'0.2em'}}/>
                                    </button>
                                </Link>
                            </li>
                        }
                        {
                            this.props.isUserLoggedIn &&
                            <li className="nav-item nav-link">
                                <Link to={`/`} onClick={() => this.props.logOutUser()}>
                                    <button className="btn bg-transparent btn-outline-danger">
                                        <i className="fa fa-sign-out"/>
                                    </button>
                                </Link>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        )
    }
}