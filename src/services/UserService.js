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

    urlUser = `http://localhost:8080/api`;
    proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    findUserBycredentials  = (user) =>{
        return fetch(`${this.urlUser}/user/login`,{
            method: 'POST',
            body: JSON.stringify(user),
            credentials:'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    registerUser = (user) => {
        return fetch(`${this.urlUser}/register`,{
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
