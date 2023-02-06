console.log("==Welcome to the Employee Wage Problem==");

// UC1- Emp Attendance Present or Absent
const isFullTime = 1;
const isPartTime = 2;
const EmpRatePerHour = 20;

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
//UC2 - calculate Wage
let empCheck = Math.floor((Math.random() * 10) % 3);
let empHrs = getWorkHrs(empCheck);
let empWage = EmpRatePerHour * empHrs;

console.log("Employee Wage is : " + empWage);