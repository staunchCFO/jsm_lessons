/**
 * @requires Array.slice()
 * 
 * The pop() method removes the last element from an array and returns that element. 
 * This method changes the length of the array.
 * 
 * In the case of this Array method, the return value is the 
 * element that is being deleted from the Array
 */

const names = ["Jon", "Bob", "David", "Mark"]

const noOneLikesJon = names.slice(1)

console.log(noOneLikesJon)