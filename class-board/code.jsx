import { useState } from "react";

function ChildComp({ handleClick }) {
    return <button onClick={() => handleClick(8055)}> update Parent value to 8055 </button>;
}

function ParentComp() {
    const [value, setValue] = useState(0);
    function handleClick(x) {
        setValue(x);
    }
    return (
        <>
            <p> value in parent {value} </p>
            <ChildComp handleClick={handleClick} />
        </>
    );
}
export default ParentComp;