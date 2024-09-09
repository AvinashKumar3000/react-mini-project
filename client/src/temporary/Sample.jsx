import { useState } from "react";
import "./mycss.css"; // 👈 make sure to include correct .css file.

const reactionArray = ["🥲", "😞", "😔", "😟", "☹️", "😊", "😄", "😁", "😀", "😃", "😆", "😂"]
function Reaction() {
    const [count, setCount] = useState(0); // 👈 01
    const [emoji, setEmoji] = useState(reactionArray[0]);
    function handleClick() {
        if (count <= reactionArray.length) {
            setEmoji(reactionArray[count + 1]);
        } else {
            setEmoji(reactionArray[reactionArray.length - 2]);
        }          // 👈 02
        setCount(count + 1)
    }
    return (
        <div className="container">
            like : {count}{emoji}
            <br />
            <i id="heart" onClick={handleClick} className="fa-solid fa-heart"></i>
        </div>
    );
}


// export default App;

function Sample() {
    return (
        <>
            <Reaction />
        </>
    );
}

export default Sample;