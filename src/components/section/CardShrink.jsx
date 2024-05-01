import { useState } from "react";

function CardShrink({ cardInfo, handleClick, idx }) {
    const [count, setCount] = useState(0);
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
        <div className="card-shrink" >
            <div className="card-main-section" onClick={() => handleClick(idx)}>
                <div className="post-by">@{cardInfo?.by}</div>
                <div className="title">{cardInfo?.title}</div>
                <br />
                <div className="desc">
                    {cardInfo?.desc}
                </div>
                <div className="tags">
                    {cardInfo?.tags?.map((value, idx) => {
                        return <div key={idx} className="tag">{value}</div>
                    })}
                </div>
            </div>
            <div className="like" >
                <span className="like-count">{count} </span>
                <i className={value} onClick={handleLike} />
            </div>
        </div>
    );
}

export default CardShrink;