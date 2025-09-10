### 1.Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll : 
getElementById : Selects only one specific element by its id.
getElementsByClassName : Selects all elements that have the given class.
querySelector: Selects the first element that matches the CSS selector.
querySelectorAll: Selects all elements that match the selector. 

### 2. Create and insert a new element into the DOM
```js
const newDiv = document.createElement("div");
document.getElementById("history-container").appendChild(newDiv) 
```

### 3.Event Bubbling and how does it work
When you click or trigger an event on a child element, JS will first run the event for that element, then go up step by step to its parent, then the parent’s parent, and so on until it reaches the top.

Events bubble up from child -> parent -> grandparent -> document -> window.

### 4.Event Delegation in JavaScript and Why is it useful
You attach a single event listener on a parent element, and use event bubbling to handle events on its child elements.
#### Why useful?
Improves performance
Works for dynamically added elements

### 5.difference between preventDefault() and stopPropagation() methods
preventDefault() : Stops the default action  of an element . like submit
stopPropagation() : Stops the event from bubbling up to parent elements