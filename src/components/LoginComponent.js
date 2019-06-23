import React from 'react';
import RegisterComponent from "./RegisterComponent";
import {Route, Link, Redirect} from 'react-router-dom';
import {selectIsUserLoggedIn} from "../reducers/loginReducer";

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            redirect : false,
            loginStatus: false
        }
    }

    checkUser = () => {
        // if(this.props.user === null){
        //     console.log("WOAZZA")
        //     this.setLoginStatus();
        // }
        this.setState({
            user: this.props.user
        })
        this.setLoginStatus()
    }

    setLoginStatus = () => {
        this.setState({
            loginStatus: true
        })
    };

    handleLoginUser = (user) => {
        console.log("HANDLE LOG IN")
        this.setState({
            user: this.props.loginUser(user)
        })
        if( this.state.user !== null && this.state.user.role !== undefined){
            console.log("LOGGED IN")
            console.log(this.state.user)
            console.log(this.state.user.role)
        }else{
            console.log("LOGGED IN 2")
            console.log(this.state.user)
            console.log(this.state.user.role)
        }
    }

    usernameFieldChanged = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                username: event.target.value
            }
        })
    };

    passwordFieldChanged = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                password: event.target.value
            }
        })
    };

    render() {
      return (
          <div>
              {console.log("LOGIN")}
              {console.log(this.props)}
              <div className="jumbotron bg-secondary">
                  <h1>Login</h1>
              </div>
              <div className="row justify-content-center">
                  {this.props.location.state !== undefined && this.props.location.state.message === true &&
                      <div className="container">
                          <div className="container justify-content-center">
                              <div className="alert alert-warning" role="alert">
                                  <h4 className="alert-heading">Oops!</h4>
                                  <p>Hmm, seems like you do not have the authorization to view that data.
                                  Please login or sign up to access those resources.</p>
                              </div>
                          </div>
                      </div>

                  }

                      <div className="container">
                          {
                              this.state.loginStatus &&
                              <div className="alert alert-warning" role="alert"
                                   onClick={() => this.setState({loginStatus: false})}>
                                  <h4 className="alert-heading">Please sign up</h4>
                                  <p>We don't seem to have your records in our database yet. Please sign up! :) </p>
                              </div>
                          }
                              </div>


                  <div className="card" style={{'width':'60%', 'marginTop':'3em', 'marginBottom':'3em'}}>
                      <div className="card-body">
                          <form className="form">
                              <div className="form-group">
                                  <label className="col-form-label-sm">
                                      <h5> Username: </h5>
                                  </label>
                                  <div className="input-group">
                                      <div className="input-group-prepend">
                                          <div className="input-group-text"><i className="fa fa-user" /></div>
                                      </div>
                                      <input type="text" className="form-control" placeholder="Username"
                                        onChange={(event) => this.usernameFieldChanged(event)}/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label className="col-form-label-sm">
                                      <h5> Password: </h5>
                                  </label>
                                  <div className="input-group">
                                      <div className="input-group-prepend">
                                          <div className="input-group-text"><i className="fa fa-lock" /></div>
                                      </div>
                                      <input type="password" className="form-control" placeholder="Password"
                                        onChange={(event) => this.passwordFieldChanged(event)}/>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div className="card-footer">
                          <div className="form-row">
                              {/*<Link to={`/`} className="ml-1 mr-auto">*/}
                              <button className="btn btn-success ml-1 mr-auto "
                                        onClick={() =>
                                        {
                                            this.props.loginUser(this.state.user);
                                            this.checkUser();
                                        }}>
                                  Login
                              </button>
                              {/*</Link>*/}

                              <Link to={`/register`}>
                                  <button className="btn btn-warning"> Sign Up </button>
                              </Link>


                              {this.props.user !== null && Object.keys(this.props.user).length > 0 ? (
                                  (this.props.user.role === "RECRUITER") ? (this.props.history.push("/recruiter")) : (
                                      (this.props.user.role === "STUDENT" ? (this.props.history.push("/")) : (this.props.history.push("/admin")))
                                  )) : (
                                  <div></div>
                              )
                              }


                              {/*{this.props.user!==null && this.props.user.role!==undefined &&*/}
                              {/*    <div>*/}
                              {/*{*/}
                              {/*    this.props.user.role === "STUDENT" ? (*/}
                              {/*        <Redirect to={`/recruiter`}/>*/}
                              {/*    ):(*/}
                              {/*        <Redirect to={`/recruiter`}/>*/}
                              {/*    )*/}
                              {/*}*/}
                              {/*    </div>*/}
                              {/*}*/}
                          </div>


                      </div>

                  </div>
              </div>

          </div>
      );
  }
}




// export default LoginComponent;