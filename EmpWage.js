console.log("==Welcome to the Employee Wage Problem==");

// UC1- Emp Attendance Present or Absent
const isFullTime = 1;
const isPartTime = 2;
const empRatePerHour = 20;
const maxWorkingDays = 20;
let totalWorkingHrs = 0;
let empWage = 0;
let empHrs = 0;

//UC3-Func to get Work hrs
function getWorkHrs(empCheck) {
    switch (empCheck) {
        case isFullTime:
            return 8;
        case isPartTime:
            return 4;
        default:
            return 0;
    }
}

//Uc4- Emp Wage for 20 Working days in a month
for (let day = 1; day <= maxWorkingDays; day++) {
    //UC2 - calculate Wage
    let empCheck = Math.floor((Math.random() * 10) % 3);
    empHrs = getWorkHrs(empCheck);
    empWage = empRatePerHour * empHrs;
    console.log("Emp wage for day " + day + " is : " + empWage);
    totalWorkingHrs = totalWorkingHrs + empHrs;
}
totalEmpWage = empRatePerHour * totalWorkingHrs;

console.log("Employee Wage for 20 Working days is : " + totalEmpWage);