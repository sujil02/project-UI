import React from 'react';

const JobDetails =({job}) => {
    return (

        <div className="container">
            {console.log(job)}
            { job &&
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-8">
                                <h3> {job.company} </h3>
                            </div>
                            <div className="col-md-4">
                                <div className="justify-content-end">
                                    <span><img src={job.company_logo} style={{'width':'50%'}} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h1> ID: {job.title}</h1>
                    </div>
                </div>
            </div>
            }
        </div>

    );

};

//     =
// } ({id}) => {


export default JobDetails;