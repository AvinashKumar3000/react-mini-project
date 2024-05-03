import { useState } from "react";

function TestingComponent() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("fa-regular fa-heart");
    function handleClick() {
        if (value === "fa-regular fa-heart") {
            setCount(count + 1);
            setValue("fa-solid fa-heart")
        } else {
            setCount(count - 1);
            setValue("fa-regular fa-heart")
        }
    }
    return (
        <>
            <p>{count}</p>
            <i onClick={handleClick} class={value}></i>
        </>
    );
}

export default TestingComponent;