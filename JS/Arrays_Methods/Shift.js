/**
 * @requires Array.shift() You will learn how to use the JavaScript Array shift() 
 * 
 * shift() is the opposite of the pop() method in an array; while pop()
 * takes out the last element of an array, shift() takes off the first element  
 */


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

const shiftedMethod = plants.shift();
console.log(shiftedMethod);
// expected output: "broccoli"

console.log(plants);
// expected output: Array ["cauliflower", "cabbage", "kale", "Tomato"]

