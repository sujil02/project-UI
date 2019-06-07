import React from 'react';

const JobDetails = ({id, job}) => {

    return (
        <div className="container">
            {console.log("HULLA")}
            {console.log(job)}
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>  </h1>
                        </div>
                        <div className="col-md-4">
                            <span>Company Logo</span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h1>Hello Bitch of ID: {id}</h1>
                </div>
            </div>
        </div>

    )
};

export default JobDetails;