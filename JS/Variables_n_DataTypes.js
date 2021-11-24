/**
 * Creating a variable involves using either the var, let or the const keywords. They are used in storing
 * values, which are also called dataTypes
 * 
 * this variable can accept different parameters, they are also called datatypes
 */


var newData = "My first coding course";
console.log(newData);

/**
 * After ES6, there were two new ways of declaring a variable, these other two options include
 * 
 * let
 * 
 * LET: this has a lot of similarities with VAR, but unlike var, let has some scope constraints
 * 
 * Also, the let variable type, supports reassigning, this means the variable can be assigned a different
 * value
 */

let userName = "Stauncher";
let userAge = 24
let userPaid = false

/**
 * Assigning a different value to the let variables 
 */

userName = "Adetola";
userAge = 30
userPaid = true


/**
 * The other way of declaring a variable, includes the const
 * 
 * In the case of "const" the values of the data they hold cannot be changed
 */

const userName = "Stauncher";
const userAge = 24
const userPaid = false


/**
 * DataTypes
 * 
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * 
 * All of the above mention data typesare called the primitive data types. while;
 * 
 * Object
 * 
 * The Object data type is called the complex data type, it is the most important data type and forms
 * the building blocks for modern javascripts
 */

//String: they are used in storing text. They are surrounded by quotes, we have 3 types of strings.

//Single Quoted String

const singleQuoteString = 'I made a single quote';

//Double Quoted String

const DoubleQuoteString = "I made a double quote";

//Backtick: They allow extended functionalities, by allowing accepting other variable in them

const backTick = `I made a double quote`;

const age = 24;
const userName = "Mike Smith";

const sentence = `My name is ${userName}, and I am just about ${age} years of age`;


//Number: this reprisents all forms of numbers, either whole numbers or floating values

const wholeNumber = 24;

const floatNumber = 0.245;

//Booleans: These are a bit tricky dataTypes, they accept either a true or a false value

const isPaid = true;

const isReady = false;

if(!isReady) {
    console.log('You need to get prepared !!')
}else {
    console.log('Hello, Good morning !!')
}


/**
 * Null and Undefined Datatypes
 */

//Null is a variable that has been assigned a value, but this value is not known yet !

let hasUsersArrived = null;

hasUsersArrived = true

//Undefined: This is another form of datatype who's value has not been assigned yet !
//This form of datatype works only with the let and var variables


/**
 * OBJECTS: The Object data type is called the complex data type, it is the most important data type and forms
 * the building blocks for modern javascripts.
 * 
 * They are also used in storing multiple datas
 */


let userInfo = {

    userName: 'Mike',
    userAge: 23,
    userAddress: '18, Salawe Street',
    userState: 'Lagos',
    userCountry: 'Nigeria',
    userPaidFull: false,
    userPOBox: null
};

console.log(userInfo.userPOBox);

/**
 * It is important to know that Array and Date belong to the Object data type.
 */

const userArr = [ 1, 2, 3, 4, 5, 6, 7, 8];

console.log(typeof userArr);


const date = new Date();

console.log(typeof date);


/**
 * Statically and Dynamically Typed languages
 */



























