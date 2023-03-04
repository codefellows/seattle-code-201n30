# Events and Forms

## Events

- Asynchronous code: code that runs out of order

- Codepen example

- Events firing: click event

- Maybe whiteboard of a webpage wireframe

- JS listens for an event
  - click
  - mouseover
  - submit
  - keypress

- We can grab the element: `getElementById(element)`
- Then we can attach the listener
- So it listens for that certain type of event that we have specified and then it can fire some sort of code, it can do something, it can handle the event

### Event Steps

- Step One: Grab element from the DOM: `let myForm = document.getElementById('my-form')`
- Step Two:  Attach the listener: `myForm.addEventListener('submit', handleSubmit)`
  - This is a method that we can attach to any html element
  - Anything that's on our webpage that JavaScript can listen to
  - Takes two arguments: our event and our callback function / event handler
  - Our event is just a string which is the type of the event that we are listening for
  - Handles the event, defines what will happen upon that event
  - Common naming conventions would be 'handleSubmit'
- Step Three: Define our handler / callback function
  - So once that event happens, this callback function runs
  - Whatever we defined this as, whatever instructions we included will execute

- Every piece here is important, we must define what element should be listening for an event and then we must define the type of event that it is listening for and then we run that method when that event happens to that specific element
- So when we specify that we want to listen to the parent element, any of the children will be included

### Event Bubbling

- Allows us to hear when our image is clicked or our text was clicked
- If we listened to the whole form, we can listen when someone types or puts something in the input field or when they click submit
- It is thus common to listen to maybe the outermost parent element, so that you can bubble through and listen to all of the nested elements as well

### Common Structure

- You build out your handler and then you see your event listeners at the very bottom of your page

## Callback Functions

- A function that gets passed in as an argument

### Events are objects

- Gets passed into our callback function
- The target is what that event happened to: so when I'm clicking on it it is the target
- Console log
  - `console.log('event', event)`
  - `console.log('target', event.target)`
- So here we can see that the target is a property of the event
- Thus if we are listening for a click, we want to know what was clicked, if we are listening for submit, then the whole form comes in

## Forms

## Labs

- Constructor function
- If you have your footer row working, you are going to have to figure out how to update that footer with the information for that new store
- Maybe try to remove that footer and add it again
- New store should be adding itself to your table
- Sales html is where your form will live
- What about submissions? What are we submitting