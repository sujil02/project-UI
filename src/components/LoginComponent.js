import React from 'react';
import RegisterComponent from "./RegisterComponent";
import {Route, Link} from 'react-router-dom';

const LoginComponent = () => {
    return (
        <div>
        <div className="row justify-content-center">
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
                            <input type="text" className="form-control" placeholder="Username" />
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
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                    </div>
                </form>
                </div>
                <div className="card-footer">
                    <div className="form-row">
                        <button className="btn btn-success ml-1 mr-auto"> Login </button>
                        <Link to={`/register`}>
                        <button className="btn btn-warning"> Sign Up </button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>

        </div>
    );
};

export default LoginComponent;