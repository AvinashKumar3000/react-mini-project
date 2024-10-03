# All important short cut links

- [All react reference links](MERN-stack-notes/front-end/PART-04-react/react-part-01.md)
- [Design full functional with good design - My mini application](MERN-stack-notes/front-end/PART-05-react-task/qn-02-learn-with-apps/My-mini-application/part-01.md)

## My JAVA full stack projects github link

- [java full stack my github link](https://github.com/avicreationstudio/java-fullstacks)

## ML and DS reference links

- [krish naik github link](https://github.com/krishnaik06)
- [krish naik youtube channel](https://www.youtube.com/@krishnaik06/playlists)

### `App.jsx`

```jsx
import { useEffect } from "react";
import { useState } from "react";

function Sample() {
    console.log("first line of component");
    const [boys, setBoys] = useState(0);
    const [girls, setGirls] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("hello world!");
    }, []);
    useEffect(() => {
        console.log("boys updated", boys);
    }, [boys]);
    useEffect(() => {
        console.log("girls updated", girls);
    }, [girls]);

    return (
        <>
            <div>
                <button onClick={() => setBoys(boys + 1)}> boys : {boys} </button>
                <button onClick={() => setGirls(girls + 1)}> girls : {girls} </button>
                <button onClick={() => setCount(count + 1)}> count : {count} </button>
            </div>
        </>
    );
}

export default function App() {
    return (
        <Sample />
    );
}
```
