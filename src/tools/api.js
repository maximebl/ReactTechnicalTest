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
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(resp => {
            return resp.data;
    });
}

export function getUserRepos(userName){
    return axios.get(`https://api.github.com/users/${userName}/repos`, {params:{sort:'created'}})
        .then(resp => {
            addTimeSinceRepoUpdate(resp.data);
            return resp.data;
    });
}
