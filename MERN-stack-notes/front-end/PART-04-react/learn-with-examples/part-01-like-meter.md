```javascript
import { useState } from "react";
import "../App.css";

function LikeMeter() {
    const [count, setCount] = useState(0); // 👈 01
    function handleClick() {
        setCount(count + 1);              // 👈 02
    }
    return (
        <div className="container">
            like : {count}
            <br />
            <i id="heart" onClick={handleClick} className="fa-solid fa-heart"></i>
        </div>
    );
}

export default LikeMeter;

```
