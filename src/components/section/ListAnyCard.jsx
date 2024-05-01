import { useState } from "react";
import PostSection from "./PostSection";
import { HINDI_MELODY_MOCK, U1_DRUGS_MOCK } from "../../mockData/cardDetailsMock";

const arr = [HINDI_MELODY_MOCK, U1_DRUGS_MOCK];

function ListAnyCard() {
    const [items, setItems] = useState(arr);
    const [isGroup, setIsGroup] = useState(false);

    function showGroup(idx) {
        if (isGroup) {
            // show only cards
            setItems(arr);
            setIsGroup(false)
        } else {
            // show groups
            setItems(arr[idx].cards);
            setIsGroup(true);
        }
    }
    return (
        <>
            <button hidden={!isGroup} onClick={showGroup}>Back</button>
            <PostSection items={items} handleClick={showGroup} />
        </>
    );
}

export default ListAnyCard;