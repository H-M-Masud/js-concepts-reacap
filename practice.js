/* ************* leap year **************** */
/* 
function getLeapYear(year){
    if(year % 4 == 0){
        return "This is year is leap year"
    }
    return "This is not leap year"
}

let currentYear = getLeapYear(2024);
 */


/* ************* odd even **************** */
/* 
function oddOrEven(number){
    if(number % 2 != 0){
        return "This is odd number"
    }
    else{
        return "This even number"
    }
}

 */

/* ************* factorial with for loop **************** */
// 3! = 3 X 2 X 1
// 4! = 4 X 3 X 2 X 1
/* 
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let myFact = getFactorial(5);
console.log(myFact) */


/* ************* factorial with while loop **************** */

function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
let myFact = getFactorial(9);
console.log(myFact)