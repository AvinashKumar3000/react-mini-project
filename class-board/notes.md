
# Rendering lists

	- It is about displaying items within the array.
 - To display, we use map concept.
steps:
 1. you need a array to render list.
 2. use below syntax.
    {
     arr.map((value) => {
           return <li>{value}</li>;
        })
    }
    3. You can replace above markup with component also.

# Responding to events

	- used to handle events like button click.
 # steps:
  1. You need any function, can be
   normal function,
   function expression,
   arrow function
  2. pass your function to handle events
  3. 
 - onClick={handleClick}
 - by default handleClick will accept a parameter named event
 - event mostly used for below purpose.

## preventDefault

eg: event.preventDefault();
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL
