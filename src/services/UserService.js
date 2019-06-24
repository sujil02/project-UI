import URL_ROOT from "./UrlConfig";

export default class UserService {

    static myInstance = null;

    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance =
                new UserService();
        }
        return this.myInstance;
    }

    urlUser = `http://localhost:8080/api`;
    proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    findUserBycredentials  = (user) =>{
        return fetch(`${URL_ROOT}/api/login`,{
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

        if (user.role == "STUDENT") {
            return fetch(`${URL_ROOT}/api/register/student`, {
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
        }
        else{
            return fetch(`${URL_ROOT}/api/register/recruiter`, {
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
        }
    }


    updateUser = (user, userId) => {
        return fetch(`${URL_ROOT}/api/user/${userId}`,{
            method: 'PUT',
            body: JSON.stringify(user),
            credentials: 'include',
            headers:{
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findUsers = (username) => {
        return fetch(`${URL_ROOT}/api/users/searchUserProfiles/${username}`)
            .then(response => response.json())
    }

    checkIfUserLoggedIn = () => {
        return fetch(`${URL_ROOT}/api/loggedIn`,{
            credentials: 'include'
        })
            .then(response => response.text())
            .catch(error => console.log("ERROR IN CHECK"))
    };

    logOutUser = () => {
        return fetch(`${URL_ROOT}/api/logout`,{
            method: 'POST',
            credentials: 'include'
        })
            .then(response => console.log(response.text()))
            .catch(error => console.log("ERROR IN LOG OUT"))
    }

    followUser = (currentUserId, userToFollowId) => {
        return fetch(`${URL_ROOT}/api/linkUsers/${currentUserId}/${userToFollowId}`,{
            method: 'POST',
        })
            .then(response => response.text())
            .catch(result => console.log("ERROR IN FOLLOW"))
    }

    getFollowingUsers = (currentUserId) => {
        return fetch(`${URL_ROOT}/api/linkUsers/${currentUserId}`)
            .then(response=> response.json())
            .catch(response=> console.log("ERROR IN GETTING FOLLOWING USERS" + response))
    }

    getFollowerUsers = (currentUserId) => {
        return fetch(`${URL_ROOT}/api/linkUsers/followers/${currentUserId}`)
            .then(response=> response.json())
            .catch(response=> console.log("ERROR IN GETTING FOLLOWERS USERS" + response))
    }


    getSkilledUsers = (skill) => {
        return fetch(`${URL_ROOT}/api/users/skill/${skill}`,{
        }).then(response=> response.json())
            .catch(response=> console.log("ERROR IN GETTING SKILLED USERS" + response))
    }

    unFollowUser = (currentUserId, userToUnfollowUserId) => {
        return fetch(`${URL_ROOT}/api/linkUsers/${currentUserId}/${userToUnfollowUserId}`,{
            method: 'DELETE',
        }).then(response => response.json())
            .catch(error => console.log("ERROR IN UNFOLLOW USERS" + error))
    }

    getAllUsers = () => {
        return fetch(`${URL_ROOT}/api/users`,{
        }).then(response => response.json())
            .catch(error => console.log("ERROR IN GETTING USERS FOR ADMIN" + error))
    }
    getSavedJobsForUsers = (userId) => {
        return fetch(`${URL_ROOT}/api/userJobLink/recentlySaved/${userId}`)
            .then(response => response.json())
            .catch(error => console.log("ERROR IN GETTING FEED JOBS FOR USER" + error))
    }



    deleteUser = (userId) => {
        return fetch(`${URL_ROOT}/api/user/${userId}`,{
            method: 'DELETE',
        }).then(response => response.json())
            .catch(error => console.log("ERROR IN DELETING A USER FOR ADMIN" + error))
    }

    findUserByUserId = (userId) => {
        return fetch(`${URL_ROOT}/api/user/${userId}`,{
            credentials: "include"
        }).then(response => response.json())
            .catch(error => console.log("ERROR  IN FIND USER BY ID" + error))
    }

}
