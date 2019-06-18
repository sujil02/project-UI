import React from 'react';
import AddJobComponent from './AddJobComponent'


class PrivateProfileComponent extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            tab: "PROFILE"
        }

        localStorage.setItem('isUserLoggedIn', this.state.isUserLoggedIn)
        // this.state = {
        //     isUserLoggedIn : this.props.isUserLoggedIn
        // }
    }


    changeTab = (tab_type) => {
        this.setState({
            tab: tab_type
        })
    }

    getclassName = (tab_type) => {
        if (tab_type === this.state.tab)
        {
            return ("list-group-item active")
        }
        else{
            return("list-group-item")
        }
    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-lg-4 col-md-4">

                        <ul className="list-group">
                            <li className={this.getclassName("PROFILE")}>
                                <button className="btn" onClick={() => this.changeTab("PROFILE")}  >
                                    Profile
                                </button>
                            </li>

                            {this.props.loggedInUser.role === "RECRUITER" &&
                                <div>
                            <li className={this.getclassName("ADD_JOB")}>
                                <button className="btn" onClick={() => this.changeTab("ADD_JOB")} >
                                    Add a Job
                                </button>
                            </li>
                            <li className={this.getclassName("ADDED_JOB")}>
                                <button className= "btn" onClick={() => this.changeTab("ADDED_JOB")} >
                                    Added Jobs
                                </button>
                            </li>
                            <li className={this.getclassName("MARKED_STUDENTS")}>
                                <button className="btn" onClick={() => this.changeTab("MARKED_STUDENTS")} >
                                    Marked Students
                                </button>
                            </li>
                                </div>
                                }

                            {this.props.loggedInUser.role === "STUDENT" &&
                            <div>
                            <li className={this.getclassName("SAVED_JOBS")}>
                                <button className="btn" onClick={() => this.changeTab("SAVED_JOBS")} >
                                   Saved Jobs
                                </button>
                            </li>
                            <li className={this.getclassName("FOLLOWED_STUDENT")}>
                                <button className="btn" onClick={() => this.changeTab("FOLLOWED_STUDENT")} >
                                    Followed Students
                                </button>
                            </li>
                                </div>
                                }
                        </ul>

                        {/*  PLACE SOME EXTRA INFO RELATED TO PROFILE HERE  */}
                    </div>


                    <div className="col-lg-8 col-md-8">

                        {this.state.tab === "PROFILE" &&
                        <div className="card">
                            <div className="card-header">
                                <h4>Personal Profile Details</h4>
                                {console.log("PROFILE")}
                                {console.log(this.props)}
                            </div>
                            <div className="card-body">
                                <div className="form">
                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Username
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   placeholder={this.props.loggedInUser.username}
                                                   readOnly/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            First Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   value={this.props.updatedUser.firstName != null ? this.props.updatedUser.firstName : this.props.loggedInUser.firstName}
                                                   type="text"
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           firstName: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Last Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   type="text"
                                                   value={this.props.updatedUser.lastName != null ? this.props.updatedUser.lastName : this.props.loggedInUser.lastName}
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           lastName: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Password
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   type="password"
                                                   value={this.props.updatedUser.password != null ? this.props.updatedUser.password : this.props.loggedInUser.password}
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           password: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Email
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   type="email"
                                                   value={this.props.updatedUser.email != null ? this.props.updatedUser.email : this.props.loggedInUser.email}
                                                   onChange={(event) => this.props.updateUser(
                                                       {
                                                           ...this.props.loggedInUser,
                                                           ...this.props.updatedUser,
                                                           email: event.target.value
                                                       })}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-form-label col-sm-2">
                                            Account Type
                                        </label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   placeholder={this.props.loggedInUser.role}
                                                   readOnly/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success btn-block"
                                        onClick={() => this.props.saveDetails(this.props.updatedUser, this.props.loggedInUser.id)}>
                                    Save Details
                                </button>
                            </div>
                            <br/>


                        </div>
                        }

                        {
                            this.state.tab === "ADD_JOB"
                            &&

                            <AddJobComponent/>
                            
                        }

                    </div>


                </div>
            </div>
        )
    }

}
export default PrivateProfileComponent;