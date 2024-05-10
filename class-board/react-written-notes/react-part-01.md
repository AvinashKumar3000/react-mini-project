# REACT NOTES

## React setup steps

download and install node js in your computer.

1. open any folder
2. open command prompt within the folder
3. use following command
 `npx create-react-app my-app`
   In above example my-app is your application name.
4. If above command is not working. Then follow below steps:
 `npm i create-react-app -g`
 then use
 `npx create-react-app my-app`

---

## MY FIRST REACT PROJECT

- command: npx create-react-app my-app
- open `my-app` folder and open command prompt within the folder
- `code .`     [ to open vs code within the folder ]
- use `ctrl + ~` short cut to open terminal/command-prompt within the vscode.
- ( or ) `view > terminal`
- give `npm start` command.
- Hurray! your first React Application.

## Node JS

- To use React in production, you need npm which is included with Node.js.
- npx ( **N**ode **P**ackage e**X**ecute ):
  - Execute package without any preior installing of packages.
- npm ( **N**ode **P**ackage **M**anager ):
  - Use to manage, install and remove packages for Node JS.

## React

- React is a JavaScript library for building user interfaces.
- Created by Facebook / Meta.
- React is used to build single-page applications.
- React is a tool for building UI components.

## VIRTUAL DOM

*React creates a VIRTUAL DOM in memory.*
*Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.*

- React only changes what needs to be changed! React finds out what
- changes have been made, and changes only what needs to be changed.

## React History

**version 16** has major changes
Current React latest version **18**

## React Docs

legacy : <https://legacy.reactjs.org/>  
modern : <https://react.dev/>

## How React works ?

 1. index.html  
 2. index.js  
 3. App.js

Here All our component codes will get collected in `App.js` then it is being redirected to `index.js`. Finally in will be included to `index.html` file
React uses ES6,

- React uses some of the new features.

## JSX in React

JSX vs JS
`HTML -> XHTML -> XML -> JS -> JSX`

### XHTML

always tag name should be smaller
always if tag is open then close tag should be there
self close tag must be closed <br/>

### XML

used to store values in HTML format
and it follows XHTML rules.

    <address>
     <city>coimbatore</city>
     <pincode>641007</pincode>
     <city>chennai</city>
     <pincode>6000009</pincode>
    </address>

### xml vs xhtml

can create our own tag name in xml.

`JSX -> JS XML`

You are not required to use JSX, but JSX makes it easier to write React applications.

.jsx
.js

## Other Front end frameworks or libraries

1. Angular
2. Vue JS
3. Svelte

## TO check if node js is installed

1. open command prompt
2. check below commands are working

`node --version`
`npm --version`
`npx --version`

## React coding started

### Remove

- `src/App.test.js`
- `src/logo.svg`

### open to src/App.js

- remove `<header></header>`
- remove line : `import logo from './logo.svg';`

In react when javascript files are saved as below extension.
Following properties are enabled.

 1. `.js`  => emmet abbreviation shortcuts won't work.
 2. `.jsx` => emmet
    abbreviation shortcuts will work.

**NOTE:**  React will consider both .js and .jsx as .jsx file only.

very very important
**NOTE:**
  JSX follows new rules to write HTML and CSS codes.
  **eg:**
   **HTML example:**
    `<div class="container"></div>`
   **JSX example:**
    `<div className="container"></div>`

NOTE: we use className because in JS already a keyword named class is used.

Rules to create JSX Files.

- File name must be started with Capital letter
- Must have one function with same name as File name
- apply `export default`  on above function.

React V16
**NOTE:** React is a component based architecture.

### class components

- uses javascript class to create components
- is a statefull component

### function components

- uses javascript function to create components.
- is a stateless component
- we will achieve all class component features in functional component using
  hooks

## Expressions in JSX

use curly braces {}
 eg: `<p> I love { 1000 * 3} </p>`

## Inserting a single Line of code

if single line, there is not need of brackets ()

## Inserting a Large Line of HTML

You need enclose with `( )`

## One Top Level Element

Must have one parent element.
**NOTE:** JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

*The HTML code must be wrapped in ONE top level element*
or we can use `<></>`
*you can use a "fragment" to wrap multiple lines.*
[NOTE]: JSX will throw an error if the HTML is not properly closed.

## diff between components and other tags

- Components has names start with Capital letters
- In react a function is a component only if It has Name start with Capital letter.
**NOTE**
- React apps are made out of components.
- A component is a piece of the UI (user interface)
 that has its own **logic and appearance**.
- A component can be as small as a button,
  or as large as an entire page.
- React components are JavaScript functions **that return markup**
