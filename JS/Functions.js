/**
 * FUNCTIONS: This is a block of code designed to perform a particular task.
 * 
 * Javascript has a couple of Built-in functions like the console.log...
 */

function squareNumber(numbers) {
    return numbers * numbers
}

const result = squareNumber(500);
console.log(result)

//.....................Three Types of functions..................

//Function Declaration
function squareNumber(numbers) {
    return numbers * numbers
}

//Function Expression Declaration || Anonymous functions
const sorted = function(numbers) {
    return numbers * numbers
}

//Arrow Functions Expressions
const sorted = (numbers) => {
    return numbers * numbers
}

/**
 * Of the 3 mentioned function types, the Arrow Functions Expressions remains the mostly used since it
 * follows the ES6 syntax, the only advance of using the function decalration over the arrow function 
 * is when you need to use the "this" keyboard, arrow functions do not support this.
 */


//Invoking || Calling a function : A function is executed only when it is called;
sorted(5);
squareNumber(56);

/**
 * Return Statement in Javascript: A javascript function without a return statement returns undefined.
 * 
 * In the case where we have multiple retun statments, it returns the first statement in the block.
 */



/**
 * Scopes in Function
 * 
 * *********Types of Scope***********
 * - Globl Scope
 * - Local || Function Scope
 * - Block Scope
 * 
 * Consider the following example below
 */

const name = "Preshy"
const age = 24
const city = Festac

function getPersonalInfo() {
    const name = "Preshy"
    const age  = 24

    return `${name} is ${age}, and lives in the city of ${city}`
}

console.log(getPersonalInfo());