# All important short cut links

- [All react reference links](MERN-stack-notes/front-end/PART-04-react/react-part-01.md)
- [Design full functional with good design - My mini application](MERN-stack-notes/front-end/PART-05-react-task/qn-02-learn-with-apps/My-mini-application/part-01.md)

## My JAVA full stack projects github link

- [java full stack my github link](https://github.com/avicreationstudio/java-fullstacks)

## ML and DS reference links

- [krish naik github link](https://github.com/krishnaik06)
- [krish naik youtube channel](https://www.youtube.com/@krishnaik06/playlists)


## Like rating application 

### `Heart.jsx`

```jsx
import { useState } from "react";

export default function Heart({ update }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked) {
            update(-1);
        } else {
            update(+1);
        }
        setClicked(!clicked);
    }

    return (
        <>
            <span onClick={handleClick}>
                {clicked ? "❤️" : "🤍"}
            </span>
        </>
    );
}
```

### `LikeRating.jsx`

```jsx
import { useState } from "react";
import Heart from "./Heart";

export default function LikeRating() {
    const [count, setCount] = useState(0);

    const update = (val) => {
        setCount(count + val);
    }

    return (
        <div className="like-rating">
            <div>Like : {count}</div>
            <Heart update={update} />
            <Heart update={update} />
            <Heart update={update} />
            <Heart update={update} />
            <Heart update={update} />
        </div>
    );
}
```

### `App.jsx`

```jsx
import LikeRating from "./LikeRating";

export default function App() {
    return (
        <div>
            <LikeRating />
            <LikeRating />
        </div>
    );
}
```

### `index.css`

```css
.like-rating {
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
    border-radius: 10px;
    width: fit-content;
}
```
