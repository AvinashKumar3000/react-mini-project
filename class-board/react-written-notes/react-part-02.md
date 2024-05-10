
# IMPORTANT TOPICS IN REACT

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

    export default function LeaveLetter() {
         let name = "roshan";
         let problem = "cold and Cough";
         return (
             <p> My name is {name}, As I am suffering from {problem} </p>
          );
    }

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

## syntax

    const [ variable , setVariable ] = useState( initialValue );

## example

    const [ count, setCount ] = useState(10);
    function handleLike() {    
            setCount(count + 1);
    }

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

# how to get inputvalue from input tag

<pre>
        import { useState } from "react";
        function ParentComp() {
          const [value, setValue] = useState("");
          return (
                &lt;div&gt;
                    &lt;input
                          type="text"
                          placeholder="input value"
                          value={ value }
                          onChange={ ( e )  => setValue( e.target.value ) }
                        /&gt;&lt;br/&gt;
                    &lt;p&gt; component has this value : {value} &lt;/p&gt;
                &lt;/div&gt;
          );
        }
        export default ParentComp;
</pre>  

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

`<React.StrictMode>` lets you find common bugs in your components early during development.

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

The process of displaying page using virtual DOM and diff algorithm.
