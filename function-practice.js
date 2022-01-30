/* function someOfNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

console.log(someOfNumbers(65, 70))

 */


// wriate a simple function that takes name as parameter and then return custom message

/* 
function msgGenerator(name){
    var message = "Hello " + name + ", welcome to programming hero";
    return message;
}

console.log(msgGenerator("H.M Masud"))

 */

/* Write a function for a food delivery services that sells 'pizza' only. each pizza price ten dolour This function takes the food & quantity as parameter and then return custom message with order info. This function should be smart enough to handle wrong parameter inputs. */
/* 
function pizzaPanda(foodName, quantity){
    if(foodName.toLowerCase() !== "pizza"){
        return "Sorry, we sell pizza only"
    }
    if(quantity >11){
        return "sorry, we have only 10 pizza left";
    }
    var price = 10 * quantity;
    var message = "Order successfull, Order info: "+ foodName + ", price: " + price + "$";
    return message;
}
console.log(pizzaPanda("pizza", 10))
 */

// object
var person = {
    name: 'Rumon',
    age: 50,
    height: '5 feet 7 inch.',
    hairColor: 'Brown',
    mail: true,
}

// template string use
/* 
var person1 = {
    name: "Rakib",
    age: 22,
};
var hisDetails = `His name is ${person1.name}. He is ${person1.age} years old.`
console.log(hisDetails)
 */