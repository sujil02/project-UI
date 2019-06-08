
export default class JobService {

    static myInstance = null;

    static getInstance() {
        if (JobService.myInstance == null) {
            JobService.myInstance =
                new JobService();
        }
        return this.myInstance;
    }


    findUserBycredentials  = (username,password) =>{
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var findUser = "";
        return fetch(proxyUrl + findUser)
            .then(response => response.json())
    }


}
