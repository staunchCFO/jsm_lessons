/**
 * @param getElementById()
 * 
 * <div id="root"></div>
 * 
 * The id is used to uniquely identify an HTML element within the document. By rules, 
 * the id root is unique within the document; no other elements can have this root id.
 */

<div id="root"></div>
let element = document.getElementById("root");

/** 
 * As mentioned earlier, id is unique within a document. However, HTML is a forgiving language. 
 * If a document has more than one element with the same id, the getElementById() method returns 
 * the first one it encounters.
*/

<html>
    <head>
        <title>JavaScript getElementById() Method</title>
    </head>
    <body>
        <p id="message">A paragraph</p>
    </body>
</html>

const p = document.getElementById('message');
console.log(p); // A Paragraph

/** 
 * *******************SUMMARY************************
 * The getElementById() returns a DOM element specified by an id or null if no matching element found.
 * 
 * If multiple elements share the same id, even though it is invalid, the getElementById() returns 
 * the first element it encounters.
*/



/**
 * @param getElementsByName()
 * 
 * This method is used in getting an element with a given name in a document
 * 
 * Unlike the id attribute, multiple HTML elements can share the same value of the 
 * name attribute like this:
 * 
 * To get all elements with a specified name, you use the getElementsByName() method of 
 * the document object:
 */

{/* <input type="radio" name="language" value="JavaScript">
<input type="radio" name="language" value="TypeScript"> */}
let elements = document.getElementsByName(name);

{/* <p>Please rate the service:</p>
<p>
    <input type="radio" name="rate" value="Very poor"> Very poor
    <input type="radio" name="rate" value="Poor"> Poor
    <input type="radio" name="rate" value="OK"> OK
    <input type="radio" name="rate" value="Good"> Good
    <input type="radio" name="rate" value="Very Good"> Very Good
</p>
<p>
    <button id="btnRate">Submit</button>
</p> */}

let btn = document.getElementById('btnRate');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            alert(`You rated: ${rate.value}`);
        }
    })
});

/** 
 * *******************SUMMARY************************
 * 
 * In the example above, we created we created 5 input fields with the same name properties "rate".
 * Also, we passed an id of btnRate to the button we created to add an event listener ot it.
 * 
 * we then added an event listener to this button anf captured all rate from the inputs .
 * 
 * Afterwards we had to loop through each rate in rates for the ones with the checked attribute before 
 * popping an alert of the value of the checked rate..
*/



/**
 * @param getElementsByTagName()
 * 
 * This method is used in selecting an element with a particular tag name.
 */

{/* <h1>JavaScript getElementsByTagName() Demo</h1>
<h2>First heading</h2>
<p>This is the first paragraph.</p>
<h2>Second heading</h2>
<p>This is the second paragraph.</p>
<h2>Third heading</h2>
<p>This is the third paragraph.</p>

<button id="btnCount">Count H2</button> */}

let btn = document.getElementById('btnCount');
    btn.addEventListener('click', () => {
        let headings = document.getElementsByTagName('h2');
        alert(`The number of H2 tags: ${headings.length}`);
    });



/** 
 * *******************SUMMARY**************
 * 
 *  The getElementsByTagName() is a method of the document or element object.
 * 
    The getElementsByTagName() accepts a tag name and returns a list of elements 
    with the matching tag name.

    The getElementsByTagName() returns a live HTMLCollection of elements. 
    The HTMLCollection is an array-like object.
*/



/**
 * @param getElementsByClassName()
 * 
 * This method is used in selecting elements by their class name.
 */


{/* <div id="app">
    <header>
        <nav>
            <ul id="menu">
                <li class="item">HTML</li>
                <li class="item">CSS</li>
                <li class="item highlight">JavaScript</li>
                <li class="item">TypeScript</li>
            </ul>
        </nav>
        <h1>getElementsByClassName Demo</h1>
    </header>
     <section>
        <article>
            <h2 class="heading-secondary">Example 1</h2>
        </article>
        <article>
            <h2 class="heading-secondary">Example 2</h2>
        </article>
    </section>
</div> */}


let menu = document.getElementById('#menu');
let items = menu.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);

console.log(data);



/**
 * @params querySelector() and querySelectorAll()
 * 
 * The querySelector() is a method of the Element interface. The querySelector() 
 * allows you to find the first element that matches one or more CSS selectors.
 */

let element = parentNode.querySelector(selector);

// Besides the querySelector(), you can use the querySelectorAll() 
// method to find all elements that match a CSS selector or a group of CSS selector:

let nodeList = Array.from(document.querySelectorAll(selector));

//Using the querySelector and querySelectorAll Css selectors

let note = document.querySelector('.menu-item');
let notes = document.querySelectorAll('.menu-item');

let logo = document.querySelector('#logo');
let notes = document.querySelectorAll('#logo');






// Summary

// The querySelector() finds the first element that matches a CSS selector or a group of CSS selectors.
// The querySelectorAll() finds all elements that match a CSS selector or a group of CSS selectors.
// A CSS selector defines elements to which a CSS rule applies.