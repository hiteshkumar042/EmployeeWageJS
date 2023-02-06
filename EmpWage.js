console.log("==Welcome to the Employee Wage Problem==");

// UC1- Emp Attendance Present or Absent
const IS_FULLTIME = 1;
const IS_PARTTIME = 2;
const EMP_RATE_PER_HRS = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HRS =100
let totalWorkingHrs = 0;
let empWage = 0;
let empHrs = 0;
let workingDay=0;

//UC3-Func to get Work hrs
function getWorkHrs(empCheck) {
    switch (empCheck) {
        case IS_FULLTIME:
            return 8;
        case IS_PARTTIME:
            return 4;
        default:
            return 0;
    }
}

//Uc4 & 5 - Emp Wage for 20 Working days in a month
while(workingDay<=MAX_WORKING_DAYS && totalWorkingHrs<=MAX_WORKING_HRS) {
    //UC2 - calculate Wage
    let empCheck = Math.floor((Math.random() * 10) % 3);
    empHrs = getWorkHrs(empCheck);
    empWage = EMP_RATE_PER_HRS * empHrs;
    console.log("Emp wage for day " + workingDay + " is : " + empWage);
    totalWorkingHrs = totalWorkingHrs + empHrs;
    workingDay++;
}
totalEmpWage = EMP_RATE_PER_HRS * totalWorkingHrs;

console.log("Total Employee wage for a Month: "+ totalEmpWage +" working for "+totalWorkingHrs+" Hrs in "+(workingDay-1)+" days");