/** 
 * @param ParentNode
 * 
 * We will learn how to get the parent node of an element by using the JavaScript 
 * parentNode attribute of the Node object.
 * 
 * 
 * The example below illustrates the parentNode of a node element
*/

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
// <title>JavaScript parentNode</title>
// </head>
// <body>
//     <div id="main">
//         <p class="note">This is a note!</p>
//     </div>
// </body>
// </html>


let note = document.querySelector('.note');
console.log(note.parentNode); 
{/* <div id="main">
    <p class="note">This is a note!</p>
</div> */}

/** 
 * ************************Summary********************************
 * 
    The node.parentNode returns the read-only parent node of a specified node or null if it does not exist.

    The document and DocumentFragment do not have a parent node
*/



/** 
 * @param ElementSiblings
 * 
 * We will learn how to select the next siblings, previous siblings, and all siblings of an element. 
 * Let’s say you have the following list of items:
*/


/** 
 * <ul id="menu">
    <li>Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li>About Us</li>
  </ul>

 ********************************************************************************
 To get the next sibling of an element, you use the nextElementSibling attribute:
 ********************************************************************************
*/
let nextSibling = currentNode.nextElementSibling;

//Example
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling); //<li>Careers</li>


/** 
 * **********************************************************************************
 * To get the previous sibling of an element, you use the previousElementSibling attribute:
 * ***********************************************************************************
*/

let current = document.querySelector('.current');
let prevSiblings = current.previousElementSibling;
console.log(prevSiblings);


/** 
 * <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript Siblings</title>
</head>
<body>
    <ul id="menu">
        <li>Home</li>
        <li>Products</li>
        <li class="current">Customer Support</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>News</li>
        <li>About Us</li>
    </ul>
    
    <script>
        let getSiblings = function (e) {
            // for collecting siblings
            let siblings = []; 
            // if no parent, return no sibling
            if(!e.parentNode) {
                return siblings;
            }
            // first child of the parent node
            let sibling  = e.parentNode.firstChild;
            // collecting siblings
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;
        };

        let siblings = getSiblings(document.querySelector('.current'));
        siblingText = siblings.map(e => e.innerHTML);
        console.log(siblingText);
    </script>
</body>
</html>

*/


/** 
 * @param ElementChildren
 * 
 * We will learn how to get the first child element, last child element, and all children 
 * of a specified element.. 
*/


/** 
 * <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>JS Get Child Elements</title>
    </head>
    <body>
    <ul id="menu">
        <li class="first">Home</li>
        <li>Products</li>
        <li class="current">Customer Support</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>News</li>
        <li class="last">About Us</li>
    </ul>
    </body>
    </html>
*/

/** 
 * ************************************************************
 * Getting Firt Child
 * ********************************************************
*/
let firstChild = parentElement.firstChild; 
//or
let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild); //#text

/** 
 * The Console window show #text because a text node is inserted to maintain the 
 * whitespace between the openning <ul> and <li> tags. This whitespace creates a #text node.
 * 
 * 
 * Or to get the first child with the Element node only, you can use the firstElementChild property:
*/

let firstElementChild = parentElement.firstElementChild;

let content = document.getElementById('menu');
console.log(content.firstElementChild); //<li class="first">Home</li>


//To get all children elements in a parentNode
let menu = document.getElementById('menu');
let children = menu.children;
console.log(children); //This will return all the list items in the <ul></ul>

/**
 * ****************************
 *          Summary
 * ***************************
 * 
 * The firstChild and lastChild return the first and last child of a node, which can be any 
 * node type including text node, comment node, and element node.
 * 
 * The firstElementChild and lastElementChild return the first and last child Element node.
 * 
 * The childNodes returns a live NodeList of all child nodes of any node type of a specified node. 
    The children return all child Element nodes of a specified node.
 */