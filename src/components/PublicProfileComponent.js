import React from 'react';
import UserService from '../services/UserService';
let userService = UserService.getInstance();

class PublicProfileComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            followSuccess: false
        }
    }

    setFollowSuccess = () => {
        this.setState({
            followSuccess: true
        })
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4> {this.props.user.firstName} {this.props.user.lastName} </h4>
                </div>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group row">
                            <label className="col-form-label col-sm-3">
                                User type
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       value={this.props.user.role}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-3">
                                Linked In
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       value={this.props.user.linked_in}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-3">
                                Email
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       value={this.props.user.email}/>
                            </div>
                        </div>

                        {this.props.user.role === "RECRUITER" ? (
                            <div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">
                                        Company
                                    </label>
                                    <div className="col-sm-9">
                                        <input className="form-control"
                                               value={this.props.user.company}/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">
                                        University
                                    </label>
                                    <div className="col-sm-9">
                                        <input className="form-control"
                                               value={this.props.user.university}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">
                                        Github
                                    </label>
                                    <div className="col-sm-9">
                                        <input className="form-control"
                                               value={this.props.user.linked_in}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">
                                        Skills
                                    </label>
                                    <div className="col-sm-9">
                                        <ul className="list-group">
                                        {this.props.user.skills
                                            .split(",")
                                            .splice(1, this.props.user.skills.split(",").length)
                                            .map(skill =>
                                             <li className="list-group-item list-group-item-action">
                                                 {skill}
                                             </li>
                                        )
                                        }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        )}


                    </div>
                </div>
                {this.props.currentUser ? (
                <div className="card-footer bg-transparent">
                    { this.state.followSuccess &&
                    <div className="row">
                        <div className="alert alert-success alert-dismissible show d-block" role="alert"
                             onClick={() => this.setState({followSuccess: false})}
                             style={{'width': '100%'}}>
                            {this.props.currentUser.role === "RECRUITER" ? (
                                <span> {this.props.user.firstName} was marked and can be viewed in your profile</span>
                            ) : (
                                <span>Following {this.props.user.firstName}. You can unfollow this user from your profile.</span>
                            )
                            }
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    }
                    {!this.state.followSuccess &&
                        <button className="btn btn-success" onClick={() => {
                            userService.followUser(this.props.currentUser.id, this.props.user.id)
                                .then(result => this.setState({
                                    followStatus: result
                                }));
                            this.setFollowSuccess();
                        }}>

                            {this.props.currentUser.role === "RECRUITER" ? (
                                <span> Mark this applicant</span>
                            ) : (
                                <span>Follow this user</span>
                            )
                            }


                        </button>
                    }

                </div> )
                    : (

                            this.props.myUserId &&
                            <button className="btn btn-danger"
                                    onClick={() => {userService.unFollowUser(this.props.myUserId, this.props.user.id);
                                                    this.props.getFollowingStudents(this.props.myUserId);this.props.set_user(0,[])}}>
                                Unfollow User
                            </button>
                    )
                }

            </div>
        )
    }
}

export default PublicProfileComponent;

