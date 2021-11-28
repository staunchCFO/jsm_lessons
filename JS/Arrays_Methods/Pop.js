/**
 * @requires Array.pop()
 * 
 * The pop() method removes the last element from an array and returns that element. 
 * This method changes the length of the array.
 * 
 * In the case of this Array method, the return value is the 
 * element that is being deleted from the Array
 */

 const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

 console.log(plants.pop());
 // expected output: "tomato"
 
 console.log(plants);
 // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
 
 plants.pop();
 
 console.log(plants);
 // expected output: Array ["broccoli", "cauliflower", "cabbage"]
 
 //If you call pop() on an empty array, it returns undefined.
 let newArr = []
 let found = newArr.pop()
 
 console.log(found) // Undefined
 
 //Another expample of arr.pop()
 
 var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
 
 var popped = myFish.pop();
 
 console.log(myFish); // ['angel', 'clown', 'mandarin' ]
 
 console.log(popped); // 'sturgeon'