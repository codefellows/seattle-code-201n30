# Debuggin'

- [Whiteboard](https://www.figma.com/file/2njaA0hP8dPqnoXPSVJ9dx/errors-and-debugging?node-id=0%3A1&t=6oFBXS5DUOpMnH2V-1)

## Types of Errors

### Syntax Errors

- Represents an error when trying to interpret syntactically invalid code
- Thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code
- Usually typos

### Reference Errors

- Represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the corrent scope is referenced
- ReferenceError: try to reference a variable or function that doesn't exist or is out of scope:
  - undefined vs. not defined
  - `const a = b;`
  - `someFunc();`

### Type Errors

- An error when an operation could not be performed
- Typically (but not exclusively when a value is not of the expected type)
- You are trying to operate on the wrong kind of data
- Often signals an error with the data object
- Might be caused by trying to perform illegal type coercion
- TypeError: try to operate on the wrong kind of data. often signals an error with the data object. Might be caused by trying to perform illegal type coercion

```javascript
const someObj = {
  a: 10,
  b: 9
};

someObj.push(20);
```

### Range Errors

- RangeError: try to call a function with an unacceptable numerical value:

```javascript
const price = 10;
price.toFixed(25);

const impossibleArray = new Array(-1);
```

```javascript
try {
  //try to do this
} catch (exception) {
  //do this if there's an exception
} finally {
  //always do this
}
```

## Debugger keyword

- A keyword that stops the execution of the code and calls the debugging function
- Available in almost all JavaScript engines

- [devtools reference](https://developer.chrome.com/docs/devtools/javascript/reference/)
