import axios from 'axios';

export function addTimeSinceRepoUpdate(repoData){
    
    let currentDate = new Date();

    repoData.forEach((repo) => {
        let updateDate = repo["updated_at"];
        let millisecondsSinceUpdate = Math.abs(currentDate - new Date(updateDate));
        let secondsSinceUpdate = millisecondsSinceUpdate / 1000;
        let daysSinceUpdate = Math.floor(secondsSinceUpdate / 86400);
        let hoursSinceUpdate = Math.floor((secondsSinceUpdate % 86400) / 3600);
        let minutesSinceUpdate = Math.floor((secondsSinceUpdate % 3600) / 60);

        repo.time_since_update = {
            days : daysSinceUpdate,
            hours: hoursSinceUpdate,
            minutes: minutesSinceUpdate
        };
    });
}

export default function getUserRepos(userName){
    return axios.get(`https://api.github.com/users/${userName}/repos`, {params:{sort:'created'}})
        .then(resp => {
            addTimeSinceRepoUpdate(resp.data);
            return resp.data;
    });
}
