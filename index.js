/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


 function createEmployeeRecord(array){
    return new Object({
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents :[],
        timeOutEvents :[]
})

}

let createEmployeeRecords = function(newArray){
    return newArray.map(function(array){
        return createEmployeeRecord(array)
    })
}
let createTimeInEvent= function(dates){
 let [date,hour] =dates.split('')

 this.timeInEvents.push({
    type: "TimeIn",
    date,
    hour :parseInt(hour,10),
 })
 return this
}

let createTimeOutEvent= function(datesOut){
    let [date,hour] =datesOut.split('')
   
    this.timeOutEvents.push({
       type: "TimeOut",
       date,
       hour :parseInt(hour,10),
    })
    return this
   }




function hoursWorkedOnDate (recordObject, param1){
    let hours = (recordObject.timeOutEvents[0].hour -recordObject.timeInEvents[0].hour)/100
    return hours
}



function wagesEarnedOnDate(recordObject,param1){
    let wages = hoursWorkedOnDate(recordObject, param1)*recordObject.payPerHour
    return wages

}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}





function calculatePayroll(employees){
 let total = 0
 for (let employee of employees){
    console.log(employee)
    total += allWagesFor(employee)
 }
 return total 
}
console.log (calculatePayroll(employees))