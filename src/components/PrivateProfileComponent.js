import React from 'react';

const PrivateProfileComponent = (user) => {
    let updatedUser = {...user.loggedInUser};
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
                                        <input className="form-control" placeholder={updatedUser.username} readOnly />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        First Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               value={user.updatedUser.firstName != null ? user.updatedUser.firstName : user.loggedInUser.firstName}
                                               type="text"
                                                onChange={(event) => user.updateUser(
                                                    user=
                                                        {...updatedUser,
                                                            ...user.updatedUser,
                                                            firstName: event.target.value})}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Last Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               type="text"
                                               value={user.updatedUser.lastName != null ? user.updatedUser.lastName : user.loggedInUser.lastName}
                                               onChange={(event) => user.updateUser(
                                                   user=
                                                       {...updatedUser,
                                                           ...user.updatedUser,
                                                           lastName: event.target.value})}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               type="password"
                                               value={user.updatedUser.password != null ? user.updatedUser.password : user.loggedInUser.password}
                                               onChange={(event) => user.updateUser(
                                                   user=
                                                       {...updatedUser,
                                                           ...user.updatedUser,
                                                           password: event.target.value})}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               type="email"
                                               value={user.updatedUser.email != null ? user.updatedUser.email : user.loggedInUser.email}
                                               onChange={(event) => user.updateUser(
                                                   user=
                                                       {...updatedUser,
                                                           ...user.updatedUser,
                                                           email: event.target.value})}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2">
                                        Account Type
                                    </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder={updatedUser.role}
                                               readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success btn-block"
                                    onClick={() => user.saveDetails(user.updatedUser, updatedUser.id)}>
                                Save Details
                            </button>
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