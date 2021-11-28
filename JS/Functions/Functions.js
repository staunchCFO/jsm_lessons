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


//Example of a variable declared in the Global Scope, it can be accessed anywhere in the code....
const name = "Preshy"
const age = 24
const city = Festac

function getPersonalInfo() {

    return `${name} is ${age}, and lives in the city of ${city}`
}

console.log(getPersonalInfo());

//Example of a variable declared in the Local Scope, it can be accessed only in the scope which it is declared....
function getPersonalInfo() {
    const myName = "Emeka";
    const myAge = 27;
    const myCity = "Lagos";

    return `${myName} is ${myAge}, and lives in the city of ${myCity}`
}

//Example of a variable declared in it's block Scope, it can be accessed in the scope it's declared....
if(true) {
    let hisScore = 1078;

    console.log(hisScore);
}


//****************************Hoisting******************************/
/**
 * Hositing is a method of calling a function or using a variable before they are being declared.
 * 
 * In the example below, the method of hoisting was practiced, in this case, a function was invoked before
 * it was actually declared. This would only work as in the case of the older javascript method and 
 * not with an arrow function, sice arrow fuction is modern javascript
 */

testingHoisting();

function testingHoisting() {

    const greetUser = "Hello User!!"

    console.log(greetUser);
}

/*
    The example below will log uncaught reference, as hoisting is not supported in modern javascript
*/
testingArrowHoisting();

const testingArrowHoisting = () => {

    const greetUser = "Hello User!! "

    console.log(greetUser);
}

/**
 * This also applies to var which is an older javascript variable declaration method and the let & const.
 * 
 * The example below will log undefined, as this is the rule that applies to hoisting in this var, only 
 * the variable declaration var varHoisting; will be hoisted and not it's value.
 * 
 * But in the case of let and const, you get a refernece error.
 */

console.log(varHoisting)

var varHoisting = 'Hoisted using the var keyword'


//******************Closure************************/
const outterFunction = () => {

    const myFirstName = "Emeka";

    const innerFunction = () => {

        const myLastName = "Okezie";

        console.log(myFirstName, myLastName);
    }

    return innerFunction;
}

const innerFunctionX = outterFunction();

innerFunctionX();

/**
 * In the above example, we defined a Closure, which in this case is the process of declaring a function
 * in a parent function. It also gives access to the outter functions scope.
 * 
 * Using the illustration from the global scope and local scope, myFistName is in a global scope to the
 * innerFunction(); hence it's value is accessible to this function scope.
 *  */