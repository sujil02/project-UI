import React from 'react';
import RegisterComponent from "./RegisterComponent";
import {Route, Link} from 'react-router-dom';
import {selectIsUserLoggedIn} from "../reducers/loginReducer";

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            redirect : false
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
              <div className="row justify-content-center">
                  {this.props.location.state !== undefined && this.props.location.state.message === true &&
                      <div className="row">
                          <div className="col-sm-12 justify-content-center">
                              <div className="alert alert-warning" role="alert">
                                  <h4 className="alert-heading">Oops!</h4>
                                  <p>Hmm, seems like you do not have the authorization to view that data.
                                  Please login or sign up to access those resources.</p>
                              </div>
                          </div>
                      </div>

                  }
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
                              <Link to={`/`} className="ml-1 mr-auto">
                              <button className="btn btn-success "
                                        onClick={() =>
                                        {
                                            this.props.loginUser(this.state.user);
                                        }}>
                                  Login
                              </button>
                              </Link>
                              <Link to={`/register`}>
                                  <button className="btn btn-warning"> Sign Up </button>
                              </Link>
                          </div>

                      </div>

                  </div>
              </div>

          </div>
      );
  }
}




// export default LoginComponent;