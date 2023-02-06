console.log("==Welcome to the Employee Wage Problem==");

// UC1- Emp Attendance Present or Absent
const isFullTime = 1;
const isPartTime = 2;
const EmpRatePerHour = 20;
let empCheck = Math.floor((Math.random()*10)%3);
switch(empCheck) {
    case isFullTime:
        empHrs = 8;
        break;
    case isPartTime:
        empHrs=4;
        break;
    default:
        empHrs=0;
}
//UC2 - calculate Wage
let empWage = EmpRatePerHour*empHrs;
console.log("Employee Wage is : "+empWage);