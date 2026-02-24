### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById()

a. Returns a single element (the first with matching ID)
b. arameter: Just the ID name (without #)
c. Fastest method, most specific

const element = document.getElementById('header');

2. getElementsByClassName()

a. Returns an HTMLCollection (live collection) of all matching elements
b. Parameter: Class name (without .)
c. Live collection - updates automatically if DOM changes

const elements = document.getElementsByClassName('item');

3. querySelector()

a. Returns the first matching element (like CSS selector)
b. Parameter: Full CSS selector (#id, .class, div, etc.)
c. More flexible but slightly slower

const element = document.querySelector('#header .item:first-child');

4. querySelectorAll()
a. Returns a NodeList (static collection) of all matching elements
b. Parameter: Full CSS selector
c. Static collection - doesn't update with DOM changes

const elements = document.querySelectorAll('.item, .active');

### 2. How do you create and insert a new element into the DOM?

1. CREATE the element
const newElement = document.createElement('div');

2. ADD content/attributes
newElement.textContent = 'Hello World';
newElement.className = 'box';
newElement.id = 'myDiv';

3. INSERT into page
document.body.appendChild(newElement);

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is the propagation of an event from the target element up through its ancestors in the DOM tree.

*** Working way
Event starts at the target element (where the event occurred)
Event "bubbles up" to parent elements
Continues up to the <html> element and document

<div id="grandparent" onclick="console.log('Grandparent')">
  <div id="parent" onclick="console.log('Parent')">
    <button id="child" onclick="console.log('Child')">Click me</button>
  </div>
</div>

Bubbling order:

Child element handlers
Parent element handlers
Grandparent element handlers

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach a single event listener to a parent element to handle events for multiple current or future child elements.

It is useful. Because:
a. Performance - Fewer event listeners
b. Dynamic elements - Works for elements added after page load
c. Cleaner code - Single handler instead of multiple

document.getElementById('myList').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});

### 5. What is the difference between preventDefault() and stopPropagation() methods?

111. preventDefault()
1. Prevents the default browser behavior for an event
2. Does NOT stop event propagation (bubbling continues)

** Example uses:
a. Preventing form submission
b. Preventing link navigation
c. Preventing checkbox toggle

link.addEventListener('click', (event) => {
  event.preventDefault(); 
  console.log('Link clicked but no navigation');
});

222. stopPropagation()
1. Stops the event from bubbling up the DOM tree
2. Does NOT prevent default browser behavior
3. Only affects event propagation

button.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Button clicked - parent handlers ignored');
});


//RIYAD