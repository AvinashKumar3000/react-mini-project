
# IMPORTANT TOPICS IN REACT
## steps to follow to create new component in new file.

1. Lets decide to create a component name `Sample`.
2. First create a file named `Sample.jsx`
3. Open `Sample.jsx`.
```javascript
// Sample.jsx
export default function Sample() { // default comp...
    return <p> Sample Component </p>;
}
```







## Importing and exporting components

### export

1. export default | eg: `export default Cartoon;`
2. export multiple items | eg: `export { Ben10, Ben10AlienForce };`
3. export, export default in function declaration

- The export default keywords specify the main component in the file.
- only one export default can be written.

### IMPORT

1. import default | eg: `import Cartoon from './Cartoon.jsx';`
2. import multiple items | eg: `import { Ben10, Ben10AlienForce } from './Cartoon.jsx';`
3. import both in single line | eg: `import Cartoon, { Ben10, Ben10AlienForce } from './Cartoon.jsx';`

## Displaying data

- using `{ }` we can display data inside markups

eg:

```javascript

    export default function LeaveLetter() {
         let name = "roshan";
         let problem = "cold and Cough";
         return (
             <p> My name is {name}, As I am suffering from {problem} </p>
          );
    }
```

- undefined and null will show nothing in webpage.
- BigInt, Boolean will only show after using toString method.

## Adding styles

### Adding styles inside public/index.html file

- using link tag. we can add our custom styles sheet
- using link tag. we can add CDN like bootstrap.
- using link tag. we can add CDN for icons like. Font Awesome.

### Adding styles outside javascript components

- Create a file name DisplayData.css
- Import above css in any components

eg:

`import './DisplayData.css';`

### Adding styles as inline style within the components

- Create a object consists of css styles.
- And by using `{ }` we can apply styles
- eg: `<div style={{ color: "red" }}> content </div>`

# OTHER POINTS IN REACT

- we can use both close tag or self close tag in react components.
- eg: `<SampleComp/>`
- eg: `<SampleComp></SampleComp>`
- You can store Markup in a variable also.

eg:  `let result = <h1>Hello world</h1>;`

- You can store Component in a variable also.

eg: `let result = <HomePage></HomePage>;`

# Conditional rendering

Ways to write conditional rendering:

- using `if`
- using `switch`
- using ternary operator `?:`

# Rendering lists

- It is about displaying items within the array.
- To display, we use map concept.

## steps

1. you need a array to render list.
2. use below syntax.

<pre>
{
      arr.map( ( value ) => {
         return &lt;li&gt; { value } &lt;/li&gt;
      })
}
</pre>

3. You can replace above markup with **component** also.

# Responding to events

- used to handle events like button click.

# steps

- You need any function, can be
  - normal function,
  - function expression,
  - arrow function
- pass your function to handle events

`function handleClick() { }`

- `onClick = { handleClick }`

- by default handleClick will accept a parameter named event

- Some times you have to send data in handleClick

`onClick={()=> handleClick(1)}`

- event mostly used for below purpose.

- Events are achieved using JS callback concept.

## preventDefault

eg: `event.preventDefault();`

The `preventDefault( )` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

Clicking on a "`Submit`" button, prevent it from submitting a form

Clicking on a link, prevent the link from following the URL

# Using Hooks

- Functions starting with use are called Hooks. **useState** is a built-in Hook provided by React.

- Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks).

# Updating the screen ( states )

## what is state in react ?

The state is where you store property values that belong to the component.

When the state changes, the component re-renders.

## why to use useState

Often, you’ll want your component to “**remember**” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

|   ` useState `              |  explanation  | example  |
|--------------------------|---------------|----------|
|what is this ?            |  The state is where you store property values that belong to the component.             |          |
|why are we using this ?   |    Often, you’ll want your component to “**remember**” some information and display it.           |          |
|when do we use this ?     |    For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.           |          |

## syntax

    const [ variable , setVariable ] = useState( initialValue );

## example

    const [ count, setCount ] = useState(10);
    function handleLike() {    
            setCount(count + 1);
    }

```javascript
// using state to make like 
import { useState } from "react";

function Sample() {
    const [count, setCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    function handleClick() {
        if (isLiked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
        setIsLiked(!isLiked);
    }
    return (
        <div className="container">
            <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={handleClick}></i>
        </div>
    );
}

export default Sample;
```

### rules to follow for states

- The variable which need to updated on screen should be keep as state.

**NOTE:** react have one-way binding.

But we can achieve two-way binding like concept using events.

- **One-way** means that the binding happens in one direction.
- In this case, changes in the data automatically update the UI.
- but changes in the UI do not automatically update the data.
- That’s why it is referred to as one-way data binding.
- React achieves one-way data binding by using state and props.

- But we can achieve two way binding using events. eg: onChange

---

class components don't use hooks concept.

where as functional components supports hooks concepts.

**NOTE** Each component has its own state.

## Sharing data between components ( props )

- Props is used to share data between components

### PARENT to CHILD

- passing values down to children component using props

syntax;

    <ComponentName  count={100}  name={"doremon"}/>

    function ComponentName({ count, name })

### CHILD TO PARENT

- passing values up to parent component using function ( call back function ) as props

- `<ComponentName  setCount={setCount}  handleClick={handleClick}/>`

- `function ComponentName({ setCount, handleClick })`

```javascript
import { useState } from "react";

function ChildComp({ count, setCount }) {
    // but using this function 👆
    // we are able to state value which in PARENT component
    function handleIncrBtn() {
        setCount(count + 1);
    }
    function handleDecrBtn() {
        setCount(count - 1);
    }
    return (
        <>
            <button onClick={handleIncrBtn}> incr </button>
            <button onClick={handleDecrBtn}> decr </button>
        </>
    );
}
function ParentComp() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p> my count : {count} </p>
            {/*          👇 here count state is being passed PARENT to CHILD component from  */}
            <ChildComp count={count} setCount={setCount} />
            {/* We are passing our setCount function 👆 here. 
                so that I can update my count state which is in PARENT component, 
                inside CHILD component.
                
                This is literally like passing value from CHILD to PARENT component.
            */}
        </>
    );
}

function Sample() {
    return <ParentComp />;
}

export default Sample;
```

# how to get inputvalue from input tag

```javascript
import { useState } from "react";
function ParentComp() {
    // 🏷️ we are using below state to store input value.
    const [value, setValue] = useState("");
    // In below code. 
    // ⚠️ we must follow onChange syntax as shown below ⚠️ 
    // then only we will able to store our input value in state.
    // eg: onChange={(e) => setValue(e.target.value)}

    // we mostly use these kind of code. 
    // in get username and password.
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


function Sample() {
    return <ParentComp />;
}

export default Sample;
```

# React Dev Tools

A browser extension used to debug react application.

- we can view structure of React components and its hierarchy.

- we can watch over states and props.

# Remove React.StrictMode

- to avoid loading ☠️ twice ☠️
- If you don't want to render your component twice
- then remove it.
- this `<React.StrictMode>` will be available in `index.js`

`<React.StrictMode>` lets you find common bugs in your components early during development.

## `index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// here in below case. we have used. 
root.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

## Strict Mode enables the following development-only behaviors

- Your components will re-render an extra time to find bugs caused by impure rendering.

- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.

- Your components will be checked for usage of deprecated APIs.

# rendering

- First time React display the content in webpage by reading components.
- First time displaying content is called rendering.

# re-rendering

- On any change in `props`, `state` or `useEffect` will reload the component.
- This is called re-rendering

# re-conciliation

- The process of displaying page using virtual DOM and diff algorithm.
