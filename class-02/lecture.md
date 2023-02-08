# NOTES

## Keyboard shortcuts:

### Open Console:

- cmnd + option + i
- ctrl + shift + i

### Emmet Abbreviations

- `!` and tab key to populate HTML
- `lorem` and tab key to populate lorem ipsum

## Data types in JavaScript

- A way of labeling and organizing our data
- A way to format our data so that our program can use it properly

### Primitive Types

- A data type that represents a single value

- undefined: value unassigned, or unfound
  - represents lack of existence (you shouldn't set a variable to this)
- null: no value / absence of value
  - represents a lack of existence (you can set a variable to this)
- boolean: true or false
- number: floating point number (there's always some decimals).
  - integers, numbers with decimals, fractions
  - unlike other programming languages, there's only one 'number' type, and it can make math weird
- string: a sequence of characters / natural language characters both '' and "" can be used
- symbol: used in ES6 …being constructed and not fully supported in all browsers

## Separation of Concerns

- Design principle for separating a computer program into distinct sections
- Different responsibilities split into distinct roles and the touchpoints of those roles are very specific
- Internal styling and logic layers can get messy, it's much better to split our code into separate disciplines
- This also results in much "cleaner" code

## CSS Reset

- A reset stylesheet (or CSS reset) is a collection of CSS rules used to clear the browser's default formatting of HTML elements, removing potential inconsistencies between different browsers.
- We reset the browser styles for two primary reasons
  - Not all browsers apply the same default rules
  - Once you start designing and coding all of the fine details of your site, you may discover that a lot of what you are doing is simply overriding default browser styles. The reset does this quickly so that you don't have to.

- [CSS RESET](https://meyerweb.com/eric/tools/css/reset/

## Git Flow Basics

### git status

- displays the state of the working directory and the staging area
- lets you see which changes have been staged, which haven't, and which files aren't being tracked by git
- does not show you any information regarding the committed project history

### git add

- Once you have made changes in your repository, you need to tell Git to start tracking the file
- `git add` adds the files to the staging area meaning Git is now tracking the changes

### git commit

- Records a snapshot of the state of the full repository along with the name, timestamp, and message of the committer
- A message is required, it is just a note so you can remember why you made the changes in the future
- Make many smaller, focused commits, rather than big ones, since small changes will be easier to undo, review and merge

### git push

- Once we finish our changes to the repository locally, we now have to add them to the version hosted on GitHub using `push`
- Only sends the changes, so it is very efficient network use

- [Whiteboard](https://www.figma.com/file/lN7LrH52Nt0ov1Uf0Plv49/Class-02?node-id=0%3A1&t=8zeHf4dNnEJB0JnD-1)
