/**
 * Operators and Equalitites
 * 
 * They perform single or more operations to produces a value.
 * 
 * Arithmetic
 * Assignment
 * Comparison
 * Ternary
 * Logical
 */

//Arithmetic operators: They are used in performing mathematical operations.

let higherValue = 45
let lowerValue = 10

const mathOperation = higherValue * lowerValue

console.log("The Multiplication result is " + mathOperation)

const additionalOperation = higherValue - lowerValue

console.log("The Addition result is " + additionalOperation)

const subtractionOperation = higherValue - lowerValue

console.log("The Subtraction result is " + subtractionOperation)

const divisionOperation = higherValue / lowerValue

console.log("The Division result is " + divisionOperation)

const moduloOperation = higherValue % lowerValue

console.log("The Modulo result is " + moduloOperation)

const exponentOperation = higherValue ** lowerValue

console.log("The Exponent result is " + exponentOperation)

const incrementOperation = higherValue++

console.log("The Increment result is " + incrementOperation)

const decrementOperation = higherValue--

console.log("The Decrement result is " + decrementOperation)


/**
 * 
 * COMPARISON OPERATORS: They compare two values and return either of the Boolean values.
 * 
 * Greater than >
 * Lesser than <
 * Equal to == 
 */

let a = 20;
let b = 30;

console.log(a >= b);


/**
 * 
 * STRICT AND TRUE EQUALITY: They compare two values and return either of the Boolean values.
 * 
 * Loose (==): This dosesn't compare datatypes.
 * Strict (===) : Compares two values and datatypes and only returns true if they are the same
 */

console.log(20 === "20"); //false
console.log("20" === "20"); //true

//Loosed equality 
console.log(20 == "20"); //true
console.log("20" == "20"); //true




/**
 * 
 * Logical OPERATORS: 
 * 
 * OR || : This checks if atleat one of the operands are true and return a truthy value
 * NOT !
 * AND && : This checks if all operands return true, else, it returns false
 */

console.log(true && false && true); //false
console.log(true || false); //true
console.log(!false); //true


/**
 * 
 * ASSIGNMENT OPERATORS: Assigns values to it left operands based on the value of the right operands
 * 
 * =
 */

let number = 7;
number += 7; //14

let number = 7;
number -= 7; //0

let number = 7;
number *= 7; //49

let number = 7;
number /= 7; //1
