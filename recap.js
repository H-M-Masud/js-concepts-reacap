/* ---------------- var, let, const ----------------------- */
const myName = "Amdadul Islam"; // type string
let myAge = 22; // type number
let isSingle = true; // type boolean


/* ---------------- array ----------------------- */
let friendNames = ["sakil", "kolil", "Zolil", "Molil", "rohim", "lajid"]
friendNames.push('solil');
friendNames.unshift('Sogir');

/* ---------------- loop ----------------------- */
for(var i = 0; i <= 10; i++){
    // console.log('hello')
}

var i = 0;
while(i <= 10){
    i++;
    // console.log(i)
}
/* ---------------- condition ----------------------- */
let haveEatten = true;
if(haveEatten == true){
    console.log('Now it is time to sleep')
}else{
    console.log('Please come here to eat')
}
/* ---------------- function ----------------------- */
function add(num1, num2){
    let total = num1 + num2;
    return total;
}