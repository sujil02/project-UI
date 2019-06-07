
export default class JobService {

    static myInstance = null;

    static getInstance() {
        if (JobService.myInstance == null) {
            JobService.myInstance =
                new JobService();
        }
        return this.myInstance;
    }


    findAllJobsbyDescriptionAndLocation  = (description,location) =>{
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var findJob = "https://jobs.github.com/positions.json?description=" + description + "&location="+location;
        return fetch(proxyUrl + findJob)
            .then(response => response.json())
    }

    findJobById = jobId => {
        // reference --- https://jobs.github.com/positions/564569b3-a4b3-460f-a683-14c5669bc9ff.json
        var findJobByID = "https://jobs.github.com/positions/" + jobId +".json";
        return fetch(findJobByID)
            .then(response => response.json())}


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
