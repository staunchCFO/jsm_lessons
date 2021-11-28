/**
 * @requires Array.forEach() You will learn how to use the JavaScript Array forEach() 
 * 
 * This performs an action for each elements in an Array
 * 
 * @requires Array.forEach() Has a return value of Undefined
 */

const names = ["Jon", "Bob", "David", "Mark"]

// for(let i = 0; i < names.length; i++){
//     console.log(i, names[i])
// }

const newArray = names.forEach((a, b) => {
    console.log(a, b)
})

// JavaScript to illustrate forEach() method
const func = () => {
    const items = [12, 24, 36];
    const copy = [];

    items.forEach((item) => {
        copy.push(item + item+2);
    });

    return copy;
}
func();

// Another way of writing the above method using the for loop

// const items = [12, 24, 36];
// const copy = [];

// for(let i = 0; i < items.length; i++) {
//     console.log(copy.push(items + items+2))
// }