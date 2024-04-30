import { useState } from "react";

function CardShrink() {
    const [count, setCount] = useState(1000);
    const [value, setValue] = useState("fa-regular fa-heart");
    function handleLike() {
        setValue("fa-solid fa-heart");
        if (value === "fa-regular fa-heart") {
            setCount(count + 1);
            setValue("fa-solid fa-heart");
        } else {
            setCount(count - 1);
            setValue("fa-regular fa-heart");
        }
    }
    return (
        <div className="card-shrink">
            <div className="post-by">@account-name</div>
            <div className="title">Heading</div>
            <div className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                doloremque, omnis laborum quis perspiciatis quae iusto, modi
                accusantium voluptatibus nesciunt sequi? Cumque provident esse error
                modi, nihil eum quisquam illum.
            </div>
            <div className="tags">
                <div className="tag">hello</div>
                <div className="tag">hello</div>
            </div>
            <div className="like" >
                <span className="like-count">{count} </span>
                <i className={value} onClick={handleLike} />
            </div>
        </div>
    );
}

export default CardShrink;