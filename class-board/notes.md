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

`const [count, setCount] = useState(10);`
`function handleLike() {`
`setCount(count + 1);`
`}`

### rules to follow for states

- The variable which need to updated on screen
 should be kept as state.

[NOTE:] react have one-way binding.
  But we can achieve two-way binding like concept using
  events.

One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.
