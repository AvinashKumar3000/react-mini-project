# CONDITIONAL RENDERING

## conditional rendering using ternary operator ?

```javascript
// A SAMPLE CODE FOR: CONDITIONAL RENDERING using ?:
import { useState } from "react";

const MOVIES = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 }
];

function Item({ movie }) {
    return (
        <>
            <li>
                <strong>{movie.title}</strong>
                <p> A director named {movie.director} released on {movie.year}</p>
            </li>
        </>
    );
}

function RenderList() {
    // below is a example for list rendering 
    return (
        <>
            {
                MOVIES.map((value, index) => {
                    return <Item key={index} movie={value} />
                })
            }
        </>
    )
}

function ChildComp({ type }) {
    // conditional rendering using ?: ternary operator
    return type === "unordered" ? <ul><RenderList /></ul> : <ol><RenderList /></ol>;
}

function ParentComp() {
    const [type, setType] = useState("ordered");
    function handleClick(params) {
        setType(params);
    }
    return (
        <div>
            {/* In below case I have used arrow function so that I can pass values to handleClick */}
            <button onClick={() => handleClick("ordered")}>change view to 🔢 ordered list</button>
            <button onClick={() => handleClick("unordered")}>change view to 📃 unordered list</button>
            {/* The below code is list rendering concept using map concept */}
            <ChildComp type={type} />
        </div>
    );
}

export default ParentComp;
```
