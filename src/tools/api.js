'use strict'
import axios from 'axios';

const millisecondsPerSecond = 1000;
const secondsPerDay = 86400;
const minutesPerHour  = 60;
const secondsPerMinute = 60;

export function addTimeSinceRepoUpdate(repoData){
    let currentDate = new Date();

    repoData.forEach((repo) => {

        let updateDate = repo["updated_at"];
        let millisecondsSinceUpdate = Math.abs(currentDate - new Date(updateDate));
        let secondsSinceUpdate = millisecondsSinceUpdate / millisecondsPerSecond;
        let daysSinceUpdate = Math.floor(secondsSinceUpdate / secondsPerDay);
        let hoursSinceUpdate = Math.floor((secondsSinceUpdate % secondsPerDay) / (minutesPerHour * secondsPerMinute));
        let minutesSinceUpdate = Math.floor((secondsSinceUpdate % (minutesPerHour * secondsPerMinute)) / secondsPerMinute);

        repo.time_since_update = {
            days : daysSinceUpdate,
            hours: hoursSinceUpdate,
            minutes: minutesSinceUpdate
        };
    });
}

export function getUserInfo(userName){
    let getUserInfoResponse = {};
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(resp => {
            getUserInfoResponse.success = true;
            getUserInfoResponse.data = resp.data;
            return getUserInfoResponse;
        })
        .catch((error) => {
            getUserInfoResponse.success = false;
            getUserInfoResponse.errorMessage = error.response.data.message;
            getUserInfoResponse.data = {};
            return getUserInfoResponse;
        });  
}

export function getUserRepos(userName, direction){
    let getUserReposResponse = {};
    
    return axios.get(`https://api.github.com/users/${userName}/repos?per_page=100`, {params:{sort:'created', direction: direction, type:'owner'}})
        .then(resp => {
            getUserReposResponse.success = true;
            addTimeSinceRepoUpdate(resp.data);
            getUserReposResponse.data = resp.data;
            return getUserReposResponse;
        })
        .catch((error) => {
            if (error.response) {
                getUserReposResponse.success = false;
                getUserReposResponse.errorMessage = error.response.data.message;
                getUserReposResponse.data = {};
                return getUserReposResponse;
            }
        });
}

export function getUserRepoInformation(userName, value){
   return axios.all([
        getUserInfo(userName),
        getUserRepos(userName, value)
    ])
    .then((data) => {
        let userInfo = data[0].data;
        let userRepos = data[1].data;
        let requestSuccessful = (data[0].success = true && data[0].success == true);

        let result = {
            success: requestSuccessful,
            userInfo: userInfo,
            userRepos: userRepos
        }
        return result;
    })
}

