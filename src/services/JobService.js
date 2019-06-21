import URL_ROOT from "./UrlConfig";
export default class JobService {

    static myInstance = null;
    static getInstance() {
        if (JobService.myInstance == null) {
            JobService.myInstance =
                new JobService();
        }
        return this.myInstance;
    }


    urlJobs = `http://localhost:8080/api/jobs`;
    proxyUrl = 'https://cors-anywhere.herokuapp.com/';


    findAllJobsbyDescriptionAndLocation  = (description,location) =>{
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var findJob = "https://jobs.github.com/positions.json?description=" + description + "&location="+location;
        return fetch(proxyUrl + findJob)
            .then(response => response.json())
    }

    findJobById = jobId => {
        // reference --- https://jobs.github.com/positions/564569b3-a4b3-460f-a683-14c5669bc9ff.json
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var findJobByID = "https://jobs.github.com/positions/" + jobId +".json";
        return fetch(proxyUrl+findJobByID)
            .then(response => response.json())}


    addJob = (job, userId) => {
        console.log("ADD JOB SERVICE")
        return fetch(`${this.urlJobs}/${userId}`,{
            method: 'POST',
            body: JSON.stringify(job),
            headers:{
                'content-type': 'application/json'
            }
        }).then(result=> result.json());
    };

    getAllJobsForAUser = (userId) => {
        return fetch(`${URL_ROOT}/api/userJobLink/${userId}`)
            .then(result => result.json())
    };

    saveGithubJob = (job, userId) => {
        return fetch(`${URL_ROOT}/api/userJobLink/${userId}`,{
            method: 'POST',
            body:  JSON.stringify(job),
            headers: {
                'content-type':'application/json'
            }
        }).then(result=> result.json())
            .catch(result=> console.log("ERROR IN SAVING GITHUB JOB"))
    }


    getCompanyDetals = (company_url) =>{
       return fetch('https://api.fullcontact.com/v3/company.enrich', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 0x80D6oMtEj4AbwZzgyoKHwnKdh8bAuN',
                'content-type':'application/json'
            },
            body: {
            "domain": company_url
        }

       }).then(result=> result.json())

    }




    // deleteWidget = widgetId =>
    //     fetch(`https://cs5610-rahul-java-server.herokuapp.com/api/widgets/${widgetId}`, {
    //         method: 'DELETE'
    //     })
    //         .then(response => response.json())
    //
    // updateWidget = (newWidget) =>
    //     fetch(`https://cs5610-rahul-java-server.herokuapp.com/api/widgets/${newWidget.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(newWidget),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(response => response.json())
    // saveWidgets = (widgets) =>
    //     fetch(`https://cs5610-rahul-java-server.herokuapp.com/api/widgets`, {
    //         method: 'PUT',
    //         body: JSON.stringify(widgets),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(response => response.json())
    //

}
