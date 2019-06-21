import React from 'react'
import {Link} from "react-router-dom";
import PublicProfileComponent from "./PublicProfileComponent";
import JobDetails from "./JobDetails";

const data =['A','B','C','D','E','F','G','H','I','J','H','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

export default class CompanyList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            job: {},
        }}

    set_Job = (job_id, jobs) => {
        this.setState({
            job: jobs.find(j => j.id === job_id)
        })
    }
    set_job_to_null = () =>{
        this.setState({
            job:{}
        })
    }

    render(){
        return(

           <div>


                   <div className="row bg-dark">
                       {
                           data.map((alphabet) =>


                                   <Link
                                       onClick={() => this.props.getCompaniesByAlphabet(alphabet)}>
                                       <h5>&nbsp; {alphabet} </h5>
                                   </Link>
                           )
                       }
                   </div>


                       <div className="row">
                           <div className="col-lg-3 col-md-3" style={{'borderRight': '3px solid black'}}>
                               <ul>
                                   {
                                       this.props.company_list.length > 0 &&
                                       this.props.company_list.map(company =>

                                           <li className="list-group-item">
                                               {console.log("company")}
                                               {console.log(company)}

                                               <button className="btn btn-block"
                                                       onClick={() => {(this.props.getCompanyDetals(company.company_url));
                                                           (this.props.getCompaniesJobs(company.company_id)); (this.set_job_to_null())} } >
                                                   {company.company_name}
                                               </button>
                                           </li>)

                                   }
                               </ul>

                           </div>
                           <div className="col-lg-3 col-md-3" style={{'borderRight': '3px solid black'}}>
                               {
                                   this.props.jobs.length > 0 &&
                                   this.props.jobs.map(posting =>

                                       <li className="list-group-item">
                                           <button className="btn"
                                                   onClick={() => this.set_Job(posting.id, this.props.jobs)}>
                                               {posting.title}
                                           </button>
                                       </li>

                               )
                               }

                           </div>
                           <div className="col-lg-6 col-md-6" >
                               {
                                   Object.keys(this.state.job).length > 0 &&
                                   <JobDetails userId={this.props.loggedInUser.id} job={this.state.job}/>
                               }
                               {
                                   Object.keys(this.props.company_details).length >0  &&
                                   <h1>HIIII</h1>
                               }
                           </div>
                       </div>

               </div>

        )
    }


}

