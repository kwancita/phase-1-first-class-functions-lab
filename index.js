// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers  = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers  = function(drivers){
    return drivers.slice(2,4);
    //return drivers.slice(2,drivers.length-2)
}

const selectingDrivers  = [returnFirstTwoDrivers,returnLastTwoDrivers];
// const selectingDriver  = [['Sally', 'Bob],['Freddy','Claudia']]

// const fareMultiplier = function num(){
//     createFareMultiplier(price){
//     return price * price;
//     }
// }

const createFareMultiplier = function(num){
    return function(fare){
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);



// const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
//     return returnFirstTwoDrivers(drivers)
// };

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}







