import React from 'react';
const RegisterComponent = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="card" style={{'width':'60%', 'marginTop':'3em', 'marginBottom':'3em'}}>
                    <div className="card-header">
                        <h4> Register </h4>
                    </div>
                    <div className="card-body">
                        <form className="form">
                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> First Name: </h5>
                                </label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> Last Name: </h5>
                                </label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>
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
                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> Account Type: </h5>
                                </label>
                                <div className="input-group">
                                    <select className="form-control">
                                        <option value="APPLICANT"> Applicant </option>
                                        <option value="RECRUITER"> Recruiter </option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> Qualification: </h5>
                                </label>
                                <div className="input-group">
                                    <select className="form-control">
                                        <option value="GRADUATE"> Graduate </option>
                                        <option value="BACHELOR"> Bachelor </option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> Major in: </h5>
                                </label>
                                <div className="input-group">
                                    <select className="form-control">
                                        <option value="CS"> Computer Science </option>
                                        <option value="IS"> Information Systems </option>
                                        <option value="ECE"> Electrical Engineering </option>
                                        <option value="DS"> Data Science </option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="form-row">
                            <button className="btn btn-success ml-1 mr-auto"> Register </button>
                        </div>

                    </div>

                </div>
        </div>
        </div>
    );
};

export default RegisterComponent;