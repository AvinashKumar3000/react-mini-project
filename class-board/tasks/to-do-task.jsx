import { useState } from "react";

function ParentComp() {
    const [arr, setArr] = useState([]);
    const [inputValue, setInputValue] = useState("");
    function handleClick() {
        if (inputValue !== "") {
            setArr([...arr, inputValue]);
            setInputValue("")
        }
    }
    return (
        <>
            <label>TODO items:</label>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleClick}>add</button>
            <ol>
                {
                    arr.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ol>
        </>
    );
}

export default ParentComp;