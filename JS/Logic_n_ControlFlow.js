/**
 * 
 * LOGIC ABD CONTROL FLOW: Assigns values to it left operands based on the value of the right operands
 * 
 * If Statement
 * Truthy/Falsy Value
 * Ternary Operator
 * Switch Statement
 */


//If Statement

let userAge = 25;
let adminAge = 30

if(userAge === 25) {
    console.log("This User is an Adult")
}else if(adminAge >= userAge) {
    console.log("Admin is old enough to take this postion")
}else {
    console.log("Neither the Admin nor the User can be registered!!")
}


//Truthy/Falsy Value

// All Falsy Values include
- false
- 0
- ''
- null
- undefined
- NaN

/**
 * Aside the above 6 falsy values, everything else in Javascript is truthy.
 */


// LOGICAL OPERATOR

const age = 19;
const isCool = true;

if(age > 18 && isCool) {
    console.log("You now have access to this club")
}else {
    console.log("You're either not cool or your age is not of the standard requirement...")
}

/**
 * In the example below, using the console.log function, the value in the console from the left hand is forst being
 * compared to the next value to it, this checks ifthey are both truthy values down to the last value
 * value and hence returns the last value if they are all truthy values
 */

console.log('truthy' && 1 && true && 999)

/**
 * In the case below, the operations stops immediately there is a falsy value and returns that value.
 */
console.log('truthy' && 1 && 0 && 999)

/**
 * For the or operator, it immediately converts the value to a boolean and returns that value if it is a
 * Truthy value, it does not have to run through all the operations.
 * 
 * In the case where wehave all falsy values, it returns the last value in the operation.
 */
console.log('truthy' || 1 || true || 999)


/**
 * SWITCH STATEMENT: This takes in a Value, and test it on several number of cases.
 */

const value = "Emeka Okezie"

switch(value) {
    case "Real Player": 
        console.log("I am a real player");
        break;
    case "Emeka Okezie": 
        console.log("This is my matching name");
        break;
    case "Justice League": 
        console.log("I just join Superman also");
        break;
    default: 
        console.log("None of the names match")
}

/**
 * Ternary Operator: This is used for a simple true or false check.
 */

const isPaid = true;

isPaid 
? console.log("Your fees has been paid")
: console.log("You need to make your payments");


/**
 * Looping(While and For Loop): This is used for a simple true or false check.
 */

let increment = 20;

while(increment < 50) {
    increment++;
    console.log(increment);
}

//For Loop

// for([initialization]; [condition]; [final-expression]) {
//     code block
// }

for(let i = 0; i < 10; i++) {
    console.log(i)
}