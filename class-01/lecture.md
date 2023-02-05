# Lecture Notes

## Git

- Distributed version control system
- Remote file system that tracks changes in any set of files
- When we make a commit it is a snapshot of the files
- Essentially it fully mirrors our repository, including the full history
- The combined commands of git add / git commit produce a new version
- Allows us to backtrack if we make mistakes, and return to the last record
- Useful for coordinating work amoung programmers who are working collarboratively
- We can also clone code from other places as well
- We can check what changes are staged with git status
- We add a message with the flag m attached to our commit
- Essentially a brief description of the changes we have made
- Git push adds yet another copy onto our github repository

![Version Control Diagram](/assets/version-control.png)

### How often to commit?

- Strive to commit every time you write code that you find useful

## Github

- Online place to share code
- File system on the internet

## Index.html

- It is immediately recognized by most servers without any additional configuration. The index.html page is the default page a website visitor sees if no other page is specified, which is often referred to as the “homepage”.

- Ensures that no matter where you choose to host your site, including if you choose to change hosting providers in the future, your default homepage will still be recognized and displayed

## Structure

Opening tag

- Consists of the name of the element wrapped in opening and closing angle brackets
- Marks where the element begins or starts to take effect

Content

- For example: within a paragraph tag the text that we want to display

Closing tag

- Same as the opening tag, except that it includes a forward slash before the element name.
- Marks where an element engs
- Failing to include a closing tag is a common beginner error that can preduce peculiar results

## Attributes

- Used to adjust the behavior or display of an HTML element
- For example can be used to change the color, size or functionality
- Consist of name value pairs
- Exist within a start-tag or empty element tag
- Include the attribute name followed by an equals sign and a value wrapped in quotes

## Semantics

- Refers to the meaning of a piece of code
- Tags that define the meaning of the content they contain
- Thus `<header> <article> <footer>` are all semantic elements because they clearly indicate the content they contain
- Really important for accessibility, as a lot of semantic elements include built-in functionality that helps people with disabilities access the web

## CSS

- CSS CASCADING: whatever runs last is the style that it takes

### Inline styling

`<h1 style="background-color: black; color: white;">Welcome Devs!</h1>`

- Style attribute is used inside of the HTML element
  - property name
  - colon
  - value
- Used in the opening HTML tag
- Only applies to the tag to which it is applied
- Not considered best practice, because it results in a lot of repetition
- Sometimes inline styling is the best or only option
- Have high speceficity / highest priority
  - Means they will override most other rules in internal / external styling sheets

### Style Element: Internal CSS

``` HTML
      <style>
          li {
              color: red;
          }
      </style>
```

- Used to define a style for a single HTML page
- Defined in the `<head>` section within `<style>` element
- Effective for styling single page
- Time consuming for multiple pages because required on every page of website
- Style block provide selector first

## JavaScript

### Script tag

- After footer
- Runs after all the content loads on the page

### Assigning Variables

- The use of names or identifiers to represent values
- Binding a name to a value gives us a way to refer to that value and use it in the programs we write
- Before you can use a variable or constant in JavaScript, you must declare it
- Utilize the `let` or `const` keywords to do so
- `let`
  - For variables, allows us to update values
- `const`
  - If we permanently assign a value to a name this is called a constant
- Set equal to the value
  - `const name = 'Stephanie'`
  - `let age = 34`
- These are statements, which create the name value pair
- *Statements* are instruction given to the computer, including things like creating a variable or function
- *Declaration Statements* are when we are creating the variable
  - `let a` is a statement
- *Expressions* return a value, can be evaluated to return value, they are building blocks
- *Assignment Expressions* use the `=` operator to assign a value to a variable

### What is a function?

- A bunch of statements, or instructions for your computer to carry out packed into a variable
- Intended to perform a task or calculate a value

### Built in functions

- Certain things that are already programmed into the browser
- We can leverage this built in functionality in our own code
- So these functions have already been declared in underlying built-in code
- `alert()`
  - behavior built into the browser
  - Whatever values you pass into the function will display
  - You can pass in your variable as well
- `prompt()`
  - Force the user to give us input
  - `let answer = prompt()`
  - means that answer will evaluate to the input

### Concatenate

- Append one or more strings to the end of another string
- `'Your name is' + name + 'and your age is' age`
- If you remove quotes it doesn't recognize each of the words as a defined character

[Whiteboard](https://www.figma.com/file/BxLHNq7yZVM2OcWWD31ZFU/Class-01?t=n4yj7L1tKcR2tPPR-1)
