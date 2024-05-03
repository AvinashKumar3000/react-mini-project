import { useState } from "react";

function ChildComponent(props) {
    return (
        <button>Child btn {props}</button>
    )
}
function ParentComponent() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={handleClick}>Parent btn {count}</button>
            <ChildComponent value={count} />
            <ChildComponent value={count} />
            <br />
        </>
    );
}

export default ParentComponent;