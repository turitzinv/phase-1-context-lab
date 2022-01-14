/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    let record = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
    return record
}

function createEmployeeRecords(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(createEmployeeRecord(array[i]))
    }
    return newArray;
}

function createTimeInEvent(dateStamp) {
    let newTimeIn = {
        type: 'TimeIn',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }
    this.timeInEvents.push(newTimeIn)
    return this //returns record back now with the newTimeIn inside of TimeInEvents
}

function createTimeOutEvent(dateStamp) {
    let newTimeOut = {
        type: 'TimeOut',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }
    this.timeOutEvents.push(newTimeOut)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let start = this.timeInEvents.find(start => start.date === dateStamp)
    // console.log(start)
    let end = this.timeOutEvents.find(end => end.date === dateStamp)
    // console.log(end)
    return (end.hour - start.hour) / 100
}

function wagesEarnedOnDate(dateStamp) {
    let wagesEarned = this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
    return wagesEarned
}

function findEmployeeByFirstName(srcArray, firstName) {
    let nameFind = srcArray.find(name => name.firstName === firstName)
    return nameFind
}

function calculatePayroll(recordArray) {
    return recordArray.reduce((total, record) => {
        return total + allWagesFor.call(record)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

