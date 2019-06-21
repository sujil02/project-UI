import React from 'react';

export default class CompanyDetailsComponent extends React.Component{
    render(){
        return (
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-10">
                            <h3> Company Name </h3>
                        </div>
                        <div className="col-md-2">
                            <div className="ml-auto mr-1">
                                <span><img src="https://picsum.photos/10/10" style={{'width':'100%', 'height':'100%'}} /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label>Company Bio</label>
                            <textarea className="form-control" readOnly/>
                        </div>

                        <div className="form-group">
                            <div className="form-row">
                                <label className="col-form-label col-sm-2 col-md-2">Address:</label>
                                <div className="col-sm-10 col-md-10">
                                    <input className="form-control" readOnly/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-row">
                                <label className="col-form-label col-sm-2 col-md-2">Website:</label>
                                <div className="col-sm-10 col-md-10">
                                    <input className="form-control" readOnly/>
                                </div>
                            </div>
                        </div>

                        <div  className="form-row">
                            <div className="col">
                                <div className="form-row">
                                <label className="col-form-label col-md-2">Founded:</label>
                                <div className="col-md-10">
                                    <input className="form-control" readOnly/>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-row">
                                <label className="col-form-label col-md-2">Employees</label>
                                <div className="col-md-10">
                                    <input className="form-control" readOnly/>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card-footer bg-dark">
                    <div className="row justify-content-center">
                        <a href="#" style={{'marginRight':'2em'}}>
                            <i className="fa fa-twitter-square fa-4x "/>
                        </a>
                        <a href="#" style={{'marginRight':'2em'}}>
                            <i className="fa fa-facebook-square fa-4x "/>
                        </a>
                        <a href="#" style={{'marginRight':'2em'}}>
                            <i className="fa fa-linkedin-square fa-4x "/>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}