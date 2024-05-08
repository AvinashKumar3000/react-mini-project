
# useEffect

- Example for API connect using useEffect
  useEffect(() => {
         console.log("API call code to get top 4 movies");
     }, []);

- The above code will only execute once. Even if we re-render.

- Execute a code during deletion of a component:
    useEffect(() => {
         console.log("executed on creation of component");
          return () => {
              console.log("executed on deletion of component");
          }
     }, []);

# useState

     while using state concept in react.
     By default when we update state value it will execute as asynchronous code.
     But sometimes. we need to perform synchronously task with states.
     For that we go for below strategy.
     eg:
          const [count, setCount] = useState(0);
             setCount((prev) => prev + 1) // sync 
  
     In above case we use arrow function to update value in state.
     which will be executed syncronously.

# useRef

# context api

- How to handle data across multi layer of components

- avoid prop drilling
 functions used to create context API.
- createContext
- useContext

steps:

 1. createing Context : createContext
 2. Providing Context : SampleContext.Provider
 3. using context     : useContext

# routing

 import react-router-dom
 const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      path: "app",
      element: <MainApp />,
    }
 ]);
 <RouterProvider router={router} />

# Importing and exporting components

## export

 1. export default
  eg: export default Cartoon;
 2. export multiple items
  eg: export { Ben10, Ben10AlienForce };
 3. export, export default in function declaration

- The export default keywords
specify the main component in the file.
- only one export default can be written.

## import

 1. import default
  eg: import Cartoon from './Cartoon.jsx';
 2. import multiple items
  eg: import { Ben10, Ben10AlienForce } from './Cartoon.jsx';
 3. import both
  eg: import Cartoon, { Ben10, Ben10AlienForce } from './Character.jsx';

# Displaying data

- using {} we can display data inside markups
 eg:
export default function LeaveLetter() {
    let name = "roshan";
    let problem = "cold and Cough";
    return (
        <p> My name is {name}, As I am suffering from {problem} </p>
    );
}

- undefined and null will show nothing in webpage.
- BigInt, Boolean will only show after using toString method.

# Adding styles

## Adding styles inside pulic/index.html file

- using link tag. we can add our custom styles sheet

- using link tag. we can add CDN like bootstrap.
- using link tag. we can add CDN for icons like. Font Awesome.

## Adding styles outside javascript components

- Create a file name DisplayData.css

- Import above css in any components
    eg:
        import './DisplayData.css';

## Adding styles as inline style within the components

- Create a object consists of css styles.

- And by using {} we can apply styles
- eg: <div style={{ color: "red" }}>
                This is my div content
            </div>

# Conditional rendering

- we can use both close tag or self close tag in react.

- You can store Markup in a variable also.
  eg: let result = <h1>Hello world</h1>;
- You can store Component in a variable also.
  eg: let result = <HomePage></HomePage>;
 Ways to write conditional rendering:
- using if
- using switch
- using ternary operator ?:

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

# steps

  1. You need any function, can be
   normal function,
   function expression,
   arrow function
  2. pass your function to handle events
  3.

 function handleClick() {

 }

- onClick={handleClick}
- by default handleClick will accept a parameter named event
- event mostly used for below purpose.

 onClick={()=> handleClick(1)}

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

 const [ variable , setVariable ] = useState( initialValue );

## example

const [count, setCount] = useState(10);

function handleLike() {
    setCount(count + 1);
}

### rules to follow for states

- The variable which need to updated on screen
 should be kept as state.

[NOTE:] react have one-way binding.
  But we can achieve two-way binding like concept using
  events.

One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.

class components don't use hooks concept.
where as functional components supports hooks concepts.

[NOTE] Each component has its own state.

# Sharing data between components ( props )

- passing values down to children component using props
 syntax;
  <ComponentName  count={100} name={"doremon"}/>
  function ComponentName({ count, name })

- passing values up to parent component using function

# how to get inputvalue from input tag

import { useState } from "react";
function ParentComp() {
    const [value, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="input value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            /><br />
            <p> component has this value : {value} </p>
        </div>
    );
}
export default ParentComp;

# useEffect

useEffect is a React Hook that lets you synchronize a component with an external system.

- do something when change in dependencies
- mostly used to connect APIs
- doing asynchronous tasks

# React Dev Tools

 A browser extension used to debug react application.

- we can view structure of React components and its hierarchy.
- we can watch over states and props.

# Remove React.StrictMode

- to avoid loading twice
<StrictMode> lets you find common bugs in your components early during development.

## Strict Mode enables the following development-only behaviors

- Your components will re-render an extra time to find bugs caused by impure rendering.
- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
- Your components will be checked for usage of deprecated APIs.

# rendering

 First time React display the content in webpage by reading components.

# re-rendering

 On any change in props, state or useEffect will reload the component.
 This is called re-rendering

# re-conciliation

 The process of rendering page using virtual DOM and diff algorithm.

# useEffect

- Example for API connect using useEffect
  useEffect(() => {
         console.log("API call code to get top 4 movies");
     }, []);

- The above code will only execute once. Even if we re-render.

- Execute a code during deletion of a component:
    useEffect(() => {
         console.log("executed on creation of component");
          return () => {
              console.log("executed on deletion of component");
          }
     }, []);

# useState

     while using state concept in react.
     By default when we update state value it will execute as asynchronous code.
     But sometimes. we need to perform synchronously task with states.
     For that we go for below strategy.
     eg:
          const [count, setCount] = useState(0);
             setCount((prev) => prev + 1) // sync 
  
     In above case we use arrow function to update value in state.
     which will be executed syncronously.

# useRef

# context api

- How to handle data across multi layer of components

- avoid prop drilling
 functions used to create context API.
- createContext
- useContext

steps:

 1. createing Context : createContext
 2. Providing Context : SampleContext.Provider
 3. using context     : useContext

# routing

 import react-router-dom
 const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      path: "app",
      element: <MainApp />,
    }
 ]);
 <RouterProvider router={router} />
