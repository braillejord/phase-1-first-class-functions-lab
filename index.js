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