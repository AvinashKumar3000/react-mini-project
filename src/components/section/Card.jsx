function Card({ cardInfo }) {
    return (
        <div className="card">
            <div className="group-by" hidden={!cardInfo.group}>@{cardInfo?.group}</div>
            <div className="title">{cardInfo?.title}</div>
            <div className="pic">
                <img src={cardInfo?.pic} alt={cardInfo?.title} />
            </div>
            <div className="sub-title">
                {cardInfo.desc}
            </div>
            <details>
                <summary> Open Music player </summary>
                <audio src={cardInfo?.src} controls></audio>
            </details>
        </div>
    );
}

export default Card;