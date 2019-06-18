import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Link} from "react-router-dom";
const AddJobComponent =({}) => {
    return (

        <div className="container">

            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-10">
                                <h3> Job Details </h3>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Title: </label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" placeholder="Enter a tiltle for job"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Type: </label>
                                <div className="col-sm-10">
                                    <input className="form-control"  placeholder="Type of Job"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Posting Date: </label>
                                <div className="col-sm-10">
                                    <input className="form-control"  placeholder="Date for posting the job"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Location: </label>
                                <div className="col-sm-10">
                                    <input className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Description: </label>
                                <div className="col-sm-10">
                                    <div className="col-sm-10">
                                        <textarea className="form-control"/>
                                    </div>
                                    {/*< className="form-control" value={job.description} readOnly/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> How to Apply: </label>
                            <div className="col-sm-10">
                                <textarea className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> Company Website: </label>
                            <div className="col-sm-10">
                                <input className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> Github Job Link: </label>
                            <div className="col-sm-10">
                                <input className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <Link  className="btn btn-block btn-success">
                           Post Job
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );

};



export default AddJobComponent;