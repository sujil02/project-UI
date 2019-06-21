
const companyListReducer = (state = {company_list:[],jobs:[], company_details:{}}, action) => {
    switch(action.type) {
        case 'COMPANIES_BY_APLHABET':
            return {
                company_list: action.company_list,
                jobs : [],
                company_details: {}
            };
        case 'JOBS_BY_COMPANIES':
            return {
                jobs: action.jobs,
                company_list : state.company_list,
                company_details: state.company_details
            };
        case 'COMPANY_DETAILS':
            return{
                jobs: state.jobs,
                company_list : state.company_list,
                company_details: action.company_details
            };
        default:
            return state;
    }
};


export default companyListReducer;