import React from 'react'
import {connect} from 'react-redux'
import SkillSearch from '../components/SkillSearch'
import JobService from '../services/JobService'
import CompanyList from "../components/CompanyList";

let jobService = JobService.getInstance();


const stateToPropertyMapper = (state) => ({
    company_list: state.companyListReducer.company_list,
    jobs:state.companyListReducer.jobs,
    company_details : state.companyListReducer.company_details,
    isUserLoggedIn: state.loginReducer.isUserLoggedIn
});


const propertyToDispatchMapper = dispatch => ({

    getCompaniesByAlphabet: (alphabet) =>
        jobService
            .getCompaniesByAlphabet(alphabet)
            .then(companies_list =>
                dispatch({
                    type: 'COMPANIES_BY_APLHABET',
                    companies_list: companies_list,
                })),
    getCompaniesJobs: (company_name) =>
        jobService
            .getCompaniesJobs(company_name)
            .then(jobs  =>
                dispatch({
                    type: 'JOBS_BY_COMPANIES',
                    jobs: jobs,
                })),

    getCompanyDetals: (company_url) =>
        jobService
            .getCompanyDetals(company_url)
            .then(company_details  =>
                dispatch({
                    type: 'COMPANY_DETAILS',
                    company_details: company_details,
                })),

});


const CompanyListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(CompanyList);

export default CompanyListContainer;