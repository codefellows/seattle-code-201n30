# Grid & Goats

## GRID

- 2 Dimensional: design along two axis with much more control than flex
- We define with columns and rows and how far we want an element to span those values
- Flexible and responsive
- Easy to use and also supported by most web browsers
- Makes mark-up cleaner: you don't have to change the markup of an HTML element to change the position

- [Grid Template Area Codepen](https://codepen.io/stephnitis/pen/XWPVVKY)
- [Grid Standard Codepen](https://codepen.io/stephnitis/pen/XWPVVKY)
- [Nested Grid and Flex Codepen](https://codepen.io/stephnitis/pen/QWVaaOq)
- [Grid Generator 1](https://cssgrid-generator.netlify.app/)
- [Grid Generator 2](https://grid.layoutit.com/)
- [Grid Garden Game](https://cssgridgarden.com/)
- [Fave Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## PROBLEM DOMAIN

Goat Vote Co is trying to decide which goats to breed from their R&D department so they can continue producing the best goats on earth. They asked you to make a web page that they can run at a kiosk at the front entrance of their campus. Whenever an employee walks by, the employee can vote for 2 goats displayed that they think should be the next big thing. After a week of collecting data, they would like some nice graphs to visualize the results.

To make this data collection project maximally effective, Goat Vote wants you to build an app that displays two of their goats side by side, without favoring any single goat.

You will need to store each anonymous vote, calculate totals, and visually display the results.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 15 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the calculations.

### DOM References

- Container to attach to event listener
- DOM Manipulation: display the images
- Button to generate results at the end
- List to manipulate via DOM

### Global Variables

- Total votes / anonymous votes (15)
- Array to hold our goats

### Constructor Function

- Image
- Clicks: votes
- Views
- Name

### Helper Functions

- Randomly generate an index from our array
- Render Function
  - While loop: for making sure the two goats displayed are different

### Event Handler

- decrement vote count
- Voting:
  - for loop -> to determine which goat was clicked and increment votes
  - if statement -> image clicked is true then we increment
  - what do we need to be true?
  - We’re comparing the value of the alt attribute to each index
  - On each index each goat has a name that needs to match that value
  - increment goat specific vote value
- I want to stop users from being able to vote when this is 0
  - if statement -> remove our event listener
  - Display results -> dependent on decrementing that total votes value
  - List -> to show votes and views of each goat
linked to our button

### Event Listener

- click event: image (within container)
- click event: button
