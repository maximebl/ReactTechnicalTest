'use strict'

export function pluralize(string, value) {
    if (value === 1) {
        return string;
    }
    return string + 's';
}

export function formatTimeSinceUpdate(days, hours, minutes){
    let daysSinceUpdate =  days > 0 ? `${days} ${pluralize('day', days)}` : '';
    let hoursSinceUpdate =  hours > 0 ? `${hours} ${pluralize('hour', hours)}` : '';
    let minutesSinceUpdate =  minutes > 0 ? `${minutes} ${pluralize('minute', minutes)}` : '';
    let timeSinceUpdate = (`${daysSinceUpdate} ${hoursSinceUpdate} ${minutesSinceUpdate}`).trim();
    return timeSinceUpdate;
}