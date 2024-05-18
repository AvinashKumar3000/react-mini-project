
# useEffect

useEffect is a React Hook that lets you synchronize a component with an external system.

1. do something when change in dependencies
2. mostly used to connect APIs
3. doing asynchronous tasks

## Example for API connect using useEffect

### Execute a code during creation of a component

<pre>
  useEffect(() => {
         console.log("API call code to get top 4 movies");
  }, []);
</pre>

- The above code will ***only execute once***. Even if we re-render.

### Execute a code during deletion of a component

<pre>
    useEffect(() => {
         console.log("executed on creation of component");
          return () => {
              console.log("executed on deletion of component");
          }
     }, []);
</pre>

# useState

- while using state concept in react.
- By default when we update state value it will execute as asynchronous code.
- But sometimes. we need to perform synchronously task with states.
- For that we go for below strategy.
- eg:
     <pre>
      const [count, setCount] = useState(0);
          setCount(count + 1) // async
          setCount((prev) => prev + 1) // sync
    </pre>
- In above case we use arrow function to update value in state.
- which will be executed synchronously.

# useRef

**USAGE :**

1. when a variable should not get affected by re-rendering.
2. used to get reference of DOM elements
3. [https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref] follow this link to see example
