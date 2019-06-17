import React from 'react';

const PrivateProfileComponent = (user) => {
    return(
        <div>
            <div >
                <div className="col-lg-8 col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>Personal Profile Details</h4>
                            {console.log("PROFILE")}
                            {console.log(user)}
                        </div>
                        <div className="card-body">
                            <div className="form">
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Username
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control" placeholder={user.loggedInUser.username} readOnly />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        First Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               value={user.loggedInUser.firstName} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Last Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               value={user.loggedInUser.lastName}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               type="password"
                                               value={user.loggedInUser.password}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               type="email"
                                               value={user.loggedInUser.email}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Account Type
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder={user.loggedInUser.role}
                                               readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-4">
                {/*  PLACE SOME EXTRA INFO RELATED TO PROFILE HERE  */}
                </div>
            </div>
        </div>
    )
};

export default PrivateProfileComponent;