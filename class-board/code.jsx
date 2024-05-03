import { useState } from "react";

function ParentComp() {
    const [arr, setArr] = useState(["message 1"]);
    const [inputValue, setInputValue] = useState("");
    function handleClick() {
        setArr([...arr, inputValue]);
    }
    return (
        <div>
            <label>msg :</label>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleClick}>submit</button>
            <ol>
                {
                    arr.map((value) => {
                        return <li>{value}</li>
                    })
                }
            </ol>
        </div>
    );
}
export default ParentComp;