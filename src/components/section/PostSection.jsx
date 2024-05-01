import Card from "./Card";
import CardShrink from './CardShrink';

function PostSection({ items, handleClick }) {
    return (
        <div className="post-section">
            {items?.map((value, idx) => {
                if (value.type === "group") {
                    return (
                        <CardShrink
                            key={idx}
                            cardInfo={value}
                            idx={idx}
                            handleClick={handleClick}
                        />
                    );
                } else {
                    return <Card key={idx} cardInfo={value} />
                }
            })}
        </div>
    );
}

export default PostSection;