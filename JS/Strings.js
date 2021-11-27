/**Strings in Javascript */

// String Length
const myName = "Chukwuemeka";

console.log(myName.length);

// String Characters
const myName = "Chukwuemeka";

const firstLetter = myName[0];
const secondLetter = myName.length - 1;

console.log(firstLetter); // consolelog == C
console.log(secondLetter); // consolelog == a
//Strings as well as Array, starts from 0

//*************Changing the Case of a String************************ */
const mixedCaseString = "Hello!, my name is Emeka";

console.log(mixedCaseString.toLowerCase());
console.log(mixedCaseString.toUpperCase());


//*************Searching for a Substring************************ */

// Using the indexOf() method;
/**
 * Returns the position of the first occurrence of a substring.

@param searchString — The substring to search for in the string

@param position — The index at which to begin searching the String object. 
If omitted, search starts at the beginning of the string.

*/

const newText = "I love HTML, CSS and JavaScript"

const result = newText.indexOf('JavaScript');

console.log(result); // 21

/**
 * In a case where the substring is not found, this returns "-1"
 */


// Using the lastIndexOf() method;
/**
 * Returns the last occurrence of a substring in the string.

@param searchString — The substring to search for.

@param position — The index at which to begin searching. If omitted, 
the search begins at the end of the string.
*/

const newText = "I love HTML, CSS and JavaScript"

const result = newText.lastIndexOf('JavaScript');

console.log(result); //

/** 
 * The above methods are used in checking for the positions of strings if they exist. 
 * 
 * To check if a string actually exist, we use the include() method
*/

const newText = "I love HTML, CSS and JavaScript"

const result = newText.includes('CSS');

console.log(result); // true


/** 
 * Finally, we have the startsWith() and the endsWith() methods which are self explanatory;
*/
startsWith();
endsWith();


/************Getting the Substring of a string*********************** */

// slice();

const yourname = "substring"

let result = yourname.slice(3)


/************Splitting a string*********************** */

// split();
let testSplit = "Mike";

const result = testSplit.split(""); // ["M", "i", "k", "e"];

// Splitting a sentence into words
const newText = "I love HTML, CSS and JavaScript"

const result = newText.split(" ") // ["I", "love", "HTML", ",", "CSS", "and", "JavaScript"]


/************Reversing, Repeating and Trimming a string*********************** */

//Reversing a string

const username = "staunch";

const newUsername = username.split("").reverse().join("");

//Repeating a string

const username = "staunch";

const result = username.repeat(5);

//Trimming a string

const username = "   staunch    ";

const result = username.trim();



/** String Task */
const guestList = "Our guests are: emma, jacob, isabella and ethan"

const stringLength = guestList.length;

const upperCaseGuestList = guestList.toUpperCase();

const isEthanOnTheList = upperCaseGuestList.includes("ETHAN");

const SubstringOfGuests = upperCaseGuestList.slice(16);

const guests = SubstringOfGuests.split(",");