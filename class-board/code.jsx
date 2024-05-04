import { useState } from "react";

function ParentComp() {
    const [count, setCount] = useState(0);
    function handleAddBtn() {
        setCount(count + 1)
    }
    function handleMinusBtn() {
        if (count > 0) {
            setCount(count - 1)
        }
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