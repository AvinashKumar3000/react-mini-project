import { BookmarkCountContext } from "../../context/BookmarkCountContext";
import useFlagCounter from "../../hooks/useFlagCounter";

export default function Bookmark({ song }) {
    const { flag, switchFlag } = useFlagCounter(song, BookmarkCountContext);

    return (
        <span onClick={switchFlag} style={{ color: 'white' }}>
            {
                flag ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>
            }
        </span>
    );
}
