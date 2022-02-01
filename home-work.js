/* ************* celciusToFarenheit **************** */
/* 
function celciusToFarenheit(celcius){
    let faren = (celcius * 9 / 5) + 32;
    return faren;
}

let farenheit = celciusToFarenheit(5);
console.log(farenheit) */

/* ************* farenheitToCelcius **************** */
/* 
function farenheitToCelcius(faren){
    let cels = (faren - 32) * 5 /9;
    return cels;
}

let celcius = farenheitToCelcius(4);
console.log(celcius)
 */

/* ************* gradeCalculation **************** */

function gradeCalculation(marks){
    if(marks > 100 || marks <= 0){
        console.log("Not a digit")
    }
    else if(marks >= 80){
        console.log("you have got A+")
    }
    else if(marks >= 70){
        console.log("you have got A")
    }
    else if(marks >= 60){
        console.log("you have got A-")
    }
    else if(marks >= 50){
        console.log("you have got B")
    }
    else if(marks >= 40){
        console.log("you have got C")
    }
    else if(marks >= 33){
        console.log("you have got D")
    }
    else{
        console.log('Fail')
    }
}

let result = gradeCalculation(98);
// console.log(result)



/* ************* Simple interest formula **************** */
/* 
function simpleInterest(principle, rate, time){
    let balance = principle;
    let rate = balance / 10;
    let time = 30;
    let total = balance * rate* time;
    return total;
} */


// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

function simpleInterest (principle,interest,time){
    let myInterest = (principle * interest * time) / 100 ;  
    return myInterest ;
}
let principle = 500 ;
let interest = 5 ;
let time = 2 ; 
let totalIntest = simpleInterest(principle, interest, time); 
// console.log(totalIntest);


for(var i = 50; i <= 80; i++){
    if( i % 2 != 0){
        console.log( i)
    }
}

