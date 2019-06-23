import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import PublicProfileComponent from "./PublicProfileComponent";

class UserSearchComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentProfile: {}
        }
    }
    render() {
        return (
            <div>
                <div className="jumbotron bg-secondary" style={{'marginBottom':'2em'}}>
                    <h1>Users</h1>
                </div>
            <div className="row">
                {console.log("SEARCH USERS")}
                {console.log(this.props)}

                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="card-header border-success">
                            <h4>Users</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                            {
                                this.props.users.map(profile =>
                                 <li className="list-group-item">
                                     <Link to={`/public/profile/${profile.id}`}
                                            onClick={() => this.setState({
                                                currentProfile: this.props.users.find(
                                                    u => u.username === profile.username
                                                )
                                            })}>
                                        <span style={{'margin-right':'0.5em'}}>
                                            {
                                                profile.role == "Recruiter" ?
                                                <i className="fa fa-user-secret fa-1x" /> :
                                                    <i className="fa fa-user fa-1x" />
                                            }
                                        </span>
                                        {profile.firstName}
                                     </Link>
                                 </li>
                                )
                            }
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                {/*    INSERT USER DETAILS HERE*/}
                <Route path={'/public/profile/:username'}
                       render={(props) => this.props.isUserLoggedIn ? (

                           <PublicProfileComponent
                            currentUser={this.props.currentUser}
                            user={this.state.currentProfile}/>
                       ):(
                           <Redirect to={{pathname: `/login`, state:{message: true}}} />
                       )
                       } />
                </div>

            </div>
            </div>
        )
    }
}

export default UserSearchComponent;