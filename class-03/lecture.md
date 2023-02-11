# Notes

## Truthiness and Falseyness

- Truthy values are expressions that evaluate to the boolean value of true, and falsy values are expressions that evaluate to the boolean value of false
- We can check to see if a value is falsy, and if it is, do something with the code such as break out of a loop or add numbers. This is useful when you start writing more functions that may be handling sets of data where you don't know what the values are, but you know you want your code to execute if the data meets a certain criteria.

- [Truthy or Falsy Repl](https://replit.com/@StephniHill/truthy-or-falsy#index.js)

## Operators

### Logical Operators

- Typically used with Boolean values, and as such return a Boolean value
- However, the `&&` and `||` operators actually return the value of one of the specified operands, so if they are used with non-Boolean values, they may return a non-Boolean value

### Comparison Operators

- Compares its operands and returns a logical value based on whether the comparison is true
- The operands can be numerical, string, logical, or object values
- Strings are compared based on standard lexicographical ordering, using Unicode values
  - Lexographical order essentially means "dictionary order" or "alpahetical order"
  - Two strings are lexicographically equal if they are the same length and contain the same characters in the same positions
- In most cases if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison
- This generally results in comparing the operands numerically
- Strict equality and inequality operators do not attempt to convert the operands to compatible types before checking equality

### Evaluating Comparisons

1. syntax: (`<operand> <operator> <operand>` )
2. each operand can be a value, a variable, or an expression
3. comparisons will usually be wrapped in ()
4. if comparing expressions using a logical operator:
  i. evaluate each expression to get true or false
  ii. use the booleans to evaluate the logical expression

### Type Coercion

- The automatic or implicit conversion of values from one data type to another
- JavaScript is called weakly typed because values can be changed from one data type to another. Languages that don't allow this are strongly typed. When performing loose equality checks, JS performs type coercion to see if values are equal if they are evaluated as having the same data type.
- In order to avoid dealing with truthy and falsy values when comparing values, you should use the === (strict equals) to stop type coercion.

- [Operators and Turthy Falsy Values Repl](https://replit.com/@StephniHill/operators#index.js)

## Array methods

- [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

## [Whiteboard!](https://www.figma.com/file/NgkJrRcoq54zLCAII20evf/class-03?node-id=0%3A1&t=jEZNpdcQ5B3ZbQnu-1)
