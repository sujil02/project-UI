import React from 'react'
import {Link, Route} from "react-router-dom";
import PublicProfileComponent from "./PublicProfileComponent";
import JobDetails from "./JobDetails";
import CompanyDetailsComponent from "./CompanyDetailsComponent";

const data =['A','B','C','D','E','F','G','H','I','J','H','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

export default class CompanyList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            job: {},
            company: []
        }
    }

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

    set_company_to_null = () => {
        this.setState({
            company:[]
        })
    }

    set_company = () => {
        this.setState({
            company: this.props.company_list
        })
    }

    render(){
        return(

           <div>
               <div className="jumbotron bg-secondary">
                   <h1>Company Search</h1>
               </div>

               {/*style={{'padding':'10px', 'backgroundColor':'#A0E6FF'}}*/}
                   <div className="row" >

                           <ul className="list-group list-group-horizontal d-inline-flex"
                               style={{'width':'100%', 'marginBottom':'2em', 'marginLeft':'1em'}}>
                               {
                                   data.map((alphabet) =>

                                       <li className="list-group-item list-group-item-secondary
                                       list-group-item-action"
                                                 onClick={() => this.props.getCompaniesByAlphabet(alphabet)}>
                                               <h5> {alphabet} </h5>

                                       </li>
                                   )
                               }
                                   </ul>

                   </div>

               { Object.keys(this.props.company_list).length > 0 &&
                   <div className="row">
                       <div className="col-lg-2 col-md-2" style={{'borderRight': '3px solid black'}}>
                           <div className="alert alert-warning" role="alert">
                               <h4 className="alert-heading ml-auto mr-2">Companies</h4>
                           </div>
                           <ul>
                               {
                                   this.props.company_list.length > 0 &&
                                   this.props.company_list.map(company =>

                                       <li className="list-group-item list-group-item-active">
                                           {console.log("company")}
                                           {console.log(company)}
                                           <Link to={`/companies/company_details`}>
                                               <button className="btn btn-block"
                                                       onClick={() => {
                                                           (this.props.getCompanyDetals(company.company_url));
                                                           (this.props.getCompaniesJobs(company.company_id));
                                                           (this.set_company());
                                                           (this.set_job_to_null())
                                                       }}>
                                                   {company.company_name}
                                               </button>
                                           </Link>
                                       </li>)

                               }
                           </ul>

                       </div>
                       <div className="col-lg-2 col-md-2" style={{'borderRight': '3px solid black'}}>
                           <div className="alert alert-warning" role="alert">
                               <h4 className="alert-heading">Jobs for Selected Company</h4>
                           </div>
                           {
                               this.props.jobs.length > 0
                               &&
                               this.props.jobs.map(posting =>

                                   <li className="list-group-item">
                                       <Link to={`/companies/job`}>
                                           <button className="btn"
                                                   onClick={() => {
                                                       this.set_Job(posting.id, this.props.jobs);
                                                   }}>
                                               {posting.title}
                                           </button>
                                       </Link>
                                   </li>
                               )
                           }

                       </div>
                       <div className="col-lg-8 col-md-8">
                           {/*{*/}
                           {/*    Object.keys(this.state.job).length > 0 &&*/}
                           {/*    <JobDetails addJob={true} userId={this.props.loggedInUser.id} job={this.state.job}/>*/}
                           {/*}*/}
                           {/*{*/}
                           {/*    // Object.keys(this.state.company_details).length >0  &&*/}
                           {/*    <h1>HIIII</h1>*/}
                           {/*}*/}
                           <Route path={`/companies/job`}
                                  render={() => <JobDetails job={this.state.job}
                                                            userId={this.props.loggedInUser.id}
                                                            addJob={true}
                                                            user={this.props.loggedInUser}/>}/>


                           <Route path={`/companies/company_details`}
                                  render={() => <CompanyDetailsComponent company={this.props.company_details}/>}/>
                       </div>
                   </div>
               }

               </div>

        )
    }


}

