import React from 'react';

export default class CompanyDetailsComponent extends React.Component{
    render(){
        return (
            <div>
                {this.props.company &&
                <div className="card">

                <div className="card-header">
                    <div className="row">
                        <div className="col-md-10">
                            <h3> {this.props.company.name} </h3>
                        </div>
                        <div className="col-md-2">
                            <div className="ml-auto mr-1">
                                <span><img src={this.props.company.logo} style={{'width':'3em', 'height':'3em'}} /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label>Company Bio</label>
                            <textarea className="form-control" value={this.props.company.bio} readOnly/>
                        </div>

                        <div className="form-group">
                            <div className="form-row">
                                <label className="col-form-label col-sm-2 col-md-2">Address:</label>
                                <div className="col-sm-10 col-md-10">
                                    <input className="form-control" value={this.props.company.location} readOnly/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-row">
                                <label className="col-form-label col-sm-2 col-md-2">Website:</label>
                                <div className="col-sm-10 col-md-10">
                                    <input className="form-control" value={this.props.company.website} readOnly/>
                                </div>
                            </div>
                        </div>

                        <div  className="form-row">
                            <div className="col">
                                <div className="form-row">
                                <label className="col-form-label col-md-2">Founded:</label>
                                <div className="col-md-10">
                                    <input className="form-control" value={this.props.company.founded} readOnly/>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-row">
                                <label className="col-form-label col-md-2">Employees</label>
                                <div className="col-md-10">
                                    <input className="form-control" value={this.props.company.employees} readOnly/>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card-footer bg-light">
                    <div className="row justify-content-center">
                        <a href={this.props.company.twitter} style={{'marginRight':'2em'}}>
                            <i className="fa fa-twitter-square fa-3x "/>
                        </a>
                        <a href={this.props.company.facebook} style={{'marginRight':'2em'}}>
                            <i className="fa fa-facebook-square fa-3x "/>
                        </a>
                        <a href={this.props.company.linkedin} style={{'marginRight':'2em'}}>
                            <i className="fa fa-linkedin-square fa-3x "/>
                        </a>
                    </div>
                </div>

            </div>
                }
            </div>
        )
    }
}