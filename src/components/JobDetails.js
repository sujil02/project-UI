import React from 'react';

const JobDetails = ({id}) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-8">
                            <h1> Job Title </h1>
                        </div>
                        <div className="col-md-4">
                            <span>Company Logo</span>
                        </div>
                    </div>
                </div>
                <div className="card-body">

                </div>
            </div>
            <h1>Hello Bitch of ID: {id}</h1>
        </div>

    )
};

export default JobDetails;