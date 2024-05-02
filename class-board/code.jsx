// This is Parent Compenent

import { useState } from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (<>
        <button onClick={handleClick}>parent count {count}</button>
        <ChildComponent value={count} />
        <ChildComponent value={count} />
        <br />
    </>)
}

export default ParentComponent;


// ---------------------------------------------------------------------------------
// This is child component

function ChildComponent(props) {
    return <button>child count {props.value}</button>;
}

export default ChildComponent;