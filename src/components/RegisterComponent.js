import React from 'react';
import {Link} from 'react-router-dom';



const RegisterComponent = (user) => {
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
                                    <input type="text" className="form-control"
                                           placeholder="First Name"
                                           onChange={(event) => user.updateUser(
                                               user=
                                                   { ...user.updatedUser,
                                                       firstName: event.target.value})}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> Last Name: </h5>
                                </label>
                                <div className="input-group">
                                    <input type="text" className="form-control"
                                           placeholder="Last Name"
                                           onChange={(event) => user.updateUser(
                                               user=
                                                   { ...user.updatedUser,
                                                       lastName: event.target.value})}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> Email: </h5>
                                </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fa fa-at" /></div>
                                    </div>
                                    <input type="text" className="form-control"
                                           placeholder="Email"
                                           onChange={(event) => user.updateUser(
                                               user=
                                                   { ...user.updatedUser,
                                                       email: event.target.value})}/>
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
                                    <input type="text" className="form-control" placeholder="Username"
                                           onChange={(event) => user.updateUser(
                                               user=
                                                   { ...user.updatedUser,
                                                       username: event.target.value})}/>
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
                                    <input type="password" className="form-control"
                                           placeholder="Password"
                                           onChange={(event) => user.updateUser(
                                               user=
                                                   { ...user.updatedUser,
                                                       password: event.target.value})}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label-sm">
                                    <h5> Role : </h5>
                                </label>
                                <div className="input-group">
                                    <select className="form-control"
                                            onChange={(event) => user.updateUser(
                                                user = {
                                                    ...user.updatedUser,
                                                    role: event.target.value
                                                })}
                                            value={user.updatedUser.role}>
                                        <option value="STUDENT"> Student </option>
                                        <option value="RECRUITER"> Recruiter </option>
                                    </select>
                                </div>
                            </div>




                            {
                                user.updatedUser.role === "STUDENT" &&

                                <div>
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
                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> Qualification: </h5>
                                    </label>
                                <div className="input-group">
                                <select className="form-control"  placeholder="Select Role" >
                                    <option value="GRADUATE"> Graduate </option>
                                    <option value="BACHELOR"> Bachelor </option>
                                </select>
                                </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> University: </h5>
                                    </label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-university"></i></div>
                                    </div>
                                    <input className="form-control"
                                        placeholder="University"
                                        onChange={(event) => user.updateUser(
                                    user=
                                        { ...user.updatedUser,
                                            university: event.target.value})}/>
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <label className="col-form-label-sm">
                                            <h5> GPA: </h5>
                                        </label>
                                        <div className="input-group">
                                            <input type="text" className="form-control"
                                                   placeholder="GPA"
                                                   onChange={(event) => user.updateUser(
                                                       user=
                                                           { ...user.updatedUser,
                                                               GPA: event.target.value})}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label-sm">
                                            <h5> LinkedIn: </h5>
                                        </label>
                                        <div className="input-group">
                                            <input type="text" className="form-control"
                                                   placeholder="LinkenIn URL"
                                                   onChange={(event) => user.updateUser(
                                                       user=
                                                           { ...user.updatedUser,
                                                               linked_in: event.target.value})}/>
                                        </div>
                                    </div>

                                    <div>
                                    <h4>Skills</h4>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                               value="option1"/>
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                               value="option1"/>
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                               value="option1"/>
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                               value="option1" />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                    </div>
                                    </div>
                                </div>

                            }

                            {
                                user.updatedUser.role === "RECRUITER" &&

                                <div className="form-group">
                                    <label className="col-form-label-sm">
                                        <h5> Company: </h5>
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-user" /></div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Company Name"
                                               onChange={(event) => user.updateUser(
                                                   user=
                                                       { ...user.updatedUser,
                                                           company: event.target.value})}/>
                                    </div>
                                </div>
                            }

                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="form-row">
                            <Link className="btn btn-success ml-1 mr-auto"
                            onClick={() => user.register(user.updatedUser)}
                            to ="/login">

                                Register

                            </Link>
                        </div>

                    </div>

                </div>
        </div>
        </div>
    );
};

export default RegisterComponent;