import { useState } from "react";

function ParentComp() {
    const [count, setCount] = useState(0);
    function handleAddBtn() {
        setCount(count + 1)
        console.log(count)
    }
    function handleMinusBtn() {
        setCount(count - 1)
        console.log(count)
    }
    return (
        <>
            <p> count : {count} </p>
            <button onClick={handleAddBtn}>add</button>
            <button onClick={handleMinusBtn}>minus</button>
        </>
    );
}

export default ParentComp;