import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import PublicProfileComponent from "./PublicProfileComponent";


export default class SkillSearch extends React.Component{
    constructor(props) {
        super(props);
        this.handleChangeJobTitle = this.handleChangeJobTitle.bind(this);
        this.state = {
            skill_value:"",
            s_user:{}
        }
    }


    handleChangeJobTitle(event){
        this.setState({
            skill_value: event.target.value
        })

    }

    set_user = (user) => {
        this.setState({
            s_user : user
        })
    }


    render(){
        return(
            <div>
                <div className="jumbotron bg-secondary" style={{'marginBottom':'2em'}}>
                    <h1>Search Applicants</h1>
                </div>
                <div className="container-fluid">


                    <div className="row">
                        <div className="col-lg-4 col-md-4" style={{'borderRight': '3px solid black'}}>
                            <div className="justify-content-center">
                                <div className="row">
                                    <div className="col-sm-12 justify-content-center">
                                        <div className="alert alert-secondary" role="alert">
                                            <h4 className="alert-heading">Find Suitable Candidates</h4>
                                            <p> Hunting applicants for a specific skill? Try the search below.
                                                Feel free to mark the applicants if you want to contact them later.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-title">
                                        Skill Required
                                    </label>
                                    <input type="input" className="form-control" id="job-title"
                                           onChange={this.handleChangeJobTitle}
                                           defaultValue={this.state.skill_value}
                                    />
                                </div>



                                <div className="form-group">
                                    <Link className="btn btn-block btn-success"
                                          onClick={() => {this.props.getSkilledUsers(this.state.skill_value);}}>
                                        Search Skilled Users
                                    </Link>
                                </div>

                            </div>
                            <ul>
                                {
                                    this.props.skilledUsers.length > 0 &&
                                    this.props.skilledUsers.map(user =>

                                        <li className="list-group-item">
                                            <button className="btn btn-block"
                                            onClick={() => this.set_user(user)} >
                                                {user.firstName} {user.lastName}
                                            </button>
                                        </li>)

                                }
                            </ul>

                        </div>


                        <div className="col-lg-8 col-md-8">
                            {Object.keys(this.state.s_user).length > 0 &&
                            <PublicProfileComponent currentUser={({role: 'RECRUITER'})} user={this.state.s_user}/>
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
}


}

