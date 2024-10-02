# All important short cut links

- [All react reference links](MERN-stack-notes/front-end/PART-04-react/react-part-01.md)
- [Design full functional with good design - My mini application](MERN-stack-notes/front-end/PART-05-react-task/qn-02-learn-with-apps/My-mini-application/part-01.md)

## My JAVA full stack projects github link

- [java full stack my github link](https://github.com/avicreationstudio/java-fullstacks)

## ML and DS reference links

- [krish naik github link](https://github.com/krishnaik06)
- [krish naik youtube channel](https://www.youtube.com/@krishnaik06/playlists)


### `App.jsx` area of circle code.

```jsx
import { useState } from "react";

const PI = 3.14;

export default function App() {
  const [radius, setRadius] = useState(0);
  const [area, setArea] = useState(0);

  const handleClick = () => {
    setArea(PI * radius * radius);
  }

  return (
    <div>
      <h1>TO FIND AREA OF CIRCLE</h1>
      <label>radius</label>
      <input
        type="number"
        value={radius}
        onChange={(e) => setRadius(e.target.value)} />
      cm
      <br />
      <button onClick={handleClick}>calculate</button>
      <br />
      <p>
        The area of circle is with radius : {radius} cm is = {area} cm<sup>2</sup>
      </p>
    </div>
  );
}
```
