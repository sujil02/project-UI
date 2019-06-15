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

    urlUser = `${URL_ROOT}/api`;
    proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    findUserBycredentials  = (user) =>{
        return fetch(`${this.proxyUrl}/${this.urlUser}/login`,{
            method: 'POST',
            body: user,
            credentials:'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    registerUser = (user) => {
        return fetch(`${this.proxyUrl}/${this.urlUser}/register`,{
            method: 'POST',
            body: user,
            credentials:'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }




}
