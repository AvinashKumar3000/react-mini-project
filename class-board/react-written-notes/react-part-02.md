Welcome file
Welcome file

## Importing and exporting components

### Export

1. export default

eg: `export default Cartoon;`

2. export multiple items

eg: `export { Ben10, Ben10AlienForce };`

3. export, export default in function declaration

example:

![export example image](https://raw.githubusercontent.com/avicreationstudio/avinash-portfolio/main/images/react-001.png)

- The export default keywords

specify the main component in the file.

- only one export default can be written.

## import

1. import default

eg: `import Cartoon from './Cartoon.jsx';`

2. import multiple items

eg:`import { Ben10, Ben10AlienForce } from './Cartoon.jsx';`

3. import both

`eg: import Cartoon, { Ben10, Ben10AlienForce } from './Character.jsx';`

# Displaying data

- using `{ }` we can display data inside markups

  ![enter image description here](https://raw.githubusercontent.com/avicreationstudio/avinash-portfolio/main/images/image.png)

eg:

- **undefined** and null will show nothing in webpage.

- **BigInt**, **Boolean** will only show after using toString method.

## Adding styles

### Adding styles inside pulic/index.html file

- using link tag. we can add our custom styles sheet

- using link tag. we can add CDN like bootstrap.

- using link tag. we can add CDN for icons like. Font Awesome.

### Adding styles outside javascript components

- Create a file name `DisplayData.css`

- Import above css in any components

eg:

`import './DisplayData.css';`

## Adding styles as inline style within the components

- Create a object consists of css styles.

- And by using `{ }` we can apply styles

- eg: `<div style={{ color: "red" }}> Hello </div>`

## Conditional rendering

- we can use both close tag or self close tag in react.
- You can store Markup in a variable also.
eg: `let result = <h1>Hello world</h1>;`

- You can store Component in a variable also.

eg: let result = <HomePage></HomePage>;

Ways to write conditional rendering:

- using if

- using switch

- using ternary operator ?:

# Rendering lists

- It is about displaying items within the array.

- To display, we use map concept.

1. you need a array to render list.

2. use below example.

![steps:](https://raw.githubusercontent.com/avicreationstudio/avinash-portfolio/main/images/react-003.png)
  
3. You can replace above markup with component also.

# Responding to events

- used to handle events like button click.

# steps

1. You need any function, It can be
  1. normal function,
  2. function expression,
  3. arrow function

4. pass your function to handle events

5. Code example is below.
`function handleClick( )  { }`

4. `onClick={handleClick}`
5. below example is to send data while handling events.
`onClick={()=> handleClick(1)}`

## preventDefault

eg: event.preventDefault();
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:
Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL

# Using Hooks

- Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
- Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks).

# Updating the screen ( states )

## what is state in react ?

React components has a built-in state object.
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

## why to use useState

Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

## syntax

`const [ variable , setVariable ] = useState( initialValue );`

## example

### rules to follow for states

- The variable which need to updated on screen
should be kept as state.
**NOTE:** react have one-way binding.
But we can achieve two-way binding like concept using
events.  

One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.

1. class components don't use hooks concept.

2. where as functional components supports hooks concepts.

# Each component has its own state
  
## Sharing data between components ( props )

- passing values down to children component using props
syntax;
` <ComponentName  count={100}  name={"doremon"}/> `

`function ComponentName({ count, name })`

- passing values up to parent component using function

# React Dev Tools

A browser extension used to debug react application.

- we can view structure of React components and its hierarchy.

- we can watch over states and props.

# Remove React.Script in index.js page

- to avoid loading twice

<StrictMode> lets you find common bugs in your components early during development.

## Strict Mode enables the following development-only behaviors

- Your components will re-render an extra time to find bugs caused by impure rendering.

- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.

- Your components will be checked for usage of deprecated APIs.
Importing and exporting components
Export
export default
eg: export default Cartoon;

export multiple items
eg: export { Ben10, Ben10AlienForce };

export, export default in function declaration
example:

export example image

The export default keywords
specify the main component in the file.

only one export default can be written.
import
import default
eg: import Cartoon from './Cartoon.jsx';

import multiple items
eg:import { Ben10, Ben10AlienForce } from './Cartoon.jsx';

import both
eg: import Cartoon, { Ben10, Ben10AlienForce } from './Character.jsx';

Displaying data
using { } we can display data inside markups

enter image description here

eg:

undefined and null will show nothing in webpage.

BigInt, Boolean will only show after using toString method.

Adding styles
Adding styles inside pulic/index.html file.
using link tag. we can add our custom styles sheet

using link tag. we can add CDN like bootstrap.

using link tag. we can add CDN for icons like. Font Awesome.

Adding styles outside javascript components
Create a file name DisplayData.css

Import above css in any components

eg:

import './DisplayData.css';

Adding styles as inline style within the components
Create a object consists of css styles.

And by using { } we can apply styles

eg: <div style={{ color: "red" }}> Hello </div>

Conditional rendering
we can use both close tag or self close tag in react.

You can store Markup in a variable also.
eg: let result = <h1>Hello world</h1>;

You can store Component in a variable also.

eg: let result = ;

Ways to write conditional rendering:

using if

using switch

using ternary operator ?:

Rendering lists
It is about displaying items within the array.

To display, we use map concept.

you need a array to render list.

use below example.

steps:

You can replace above markup with component also.
Responding to events
used to handle events like button click.
steps:
You need any function, It can be

normal function,
function expression,
arrow function
pass your function to handle events

Code example is below.
function handleClick( ) { }

onClick={handleClick}

below example is to send data while handling events.
onClick={()=> handleClick(1)}

preventDefault
eg: event.preventDefault();
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:
Clicking on a “Submit” button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL

Using Hooks
Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks).
Updating the screen ( states )
what is state in react ?
React components has a built-in state object.
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

why to use useState
Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

syntax
const [ variable , setVariable ] = useState( initialValue );

example:
rules to follow for states
The variable which need to updated on screen
should be kept as state.
NOTE: react have one-way binding.
But we can achieve two-way binding like concept using
events.
One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.

class components don’t use hooks concept.

where as functional components supports hooks concepts.

Each component has its own state.
Sharing data between components ( props )
passing values down to children component using props
syntax;
<ComponentName count={100} name={"doremon"}/>
function ComponentName({ count, name })

passing values up to parent component using function
React Dev Tools
A browser extension used to debug react application.

we can view structure of React components and its hierarchy.

we can watch over states and props.

Remove React.Script in index.js page
to avoid loading twice
lets you find common bugs in your components early during development.

Strict Mode enables the following development-only behaviors:
Your components will re-render an extra time to find bugs caused by impure rendering.

Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.

Your components will be checked for usage of deprecated APIs.

Markdown selection 5754 bytes 835 words 368 lines Ln 369, Col 63HTML 3932 characters 746 words 112 paragraphs
