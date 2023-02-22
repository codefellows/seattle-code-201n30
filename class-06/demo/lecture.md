# Objects & The DOM

## Objects

- An unordered collection of named values

### Properties

- Represented as key value pairs
- Key is like an address: it is a reference to the value it holds

```js
let myObject = {
  myKey: 'my value'
  5: 'some value'
}
```

### Accessing Properties

#### Dot Notation

- Object name followed by dot and then the key will return the value
  - `myObject.myKey` // returns `'my value'`

#### Bracket Notation

- Used for keys that are numbers or contain spaces
  - `myObject[5]` // returns `'some value'`

#### Methods

- Functions defined on objects
- Can be invoked with dot notation

```js
let myObject = {
  myMethod: function(){
    console.log('some message');
  }
}

myObject.myMethod();
```

#### Contextual THIS

- The value of `this` changes based on where code is running
- Inside of an object literal, it refers to the whole object
- Outside of the object it refers to the browser window

## DOM

- Essentially a built in object of the JavaScript language
- Allows us to access everything within our document the same way we access properties within smaller objects

### Steps for DOM manipulation in JS

#### 1. Grab window into the DOM

```js
// My JavaScript needs to have access to my HTML
// we can then grab the element based upon a specified selector
// getElementById returns a single element object
document.getElementById('id-attribute-string');
// querySelector allows us to find the element/elements within a document that match a specified CSS selector
// Remember that our selectors ALSO specify document structure via parent child relationships etc
// This method takes a CSS selector string as its argument and returns the first matching element in the document that it finds: or null if no match is found
document.querySelector();
```

#### 2. Create an element

```js
// method that creates the HTML element specified
// this will create an h2
document.createElement('h2');
```

#### 3. Give it content if necessary

```js
// textContent gets the content of all elements, including <script> and <style> elements
h2Elem.textContent = 'Hey I\'m an H2';
// though they can be utilized similarly
// innerText only shows "human-readable" elements
// innerText returns all text contained by an element and all its child elements
h2Elem.innerText = 'Hey I\'m an H2';
// innerHtml returns all text, including html tags, that is contained by an element
innerHTML = "<h2>Hey I am an H2 with Content</h2>"
```

#### 4. Add it to the DOM

```js
// adds child element to a parent element
// thus h2 is appended to the article element
articleElem.appendChild(h2Elem)
```
