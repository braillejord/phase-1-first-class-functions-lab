const returnFirstTwoDrivers = function(driver) {
    return driver.slice(0,2)
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(driver) {
    return driver.slice(2, 4)
}

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function() {
        return (fare * fare)
    }
}
const fareDoubler = function(fare) {
    let dubFare = fare * 2
    return dubFare
}

const fareTripler = function(fare) {
    let tripFare = fare * 3
    return tripFare
}

function selectDifferentDrivers(array, passedFunc) {
    return passedFunc(array);
}