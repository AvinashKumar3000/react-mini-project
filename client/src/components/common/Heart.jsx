import { FavCountContext } from "../../context/FavCountContext";
import useFlagCounter from "../../hooks/useFlagCounter";

export default function Heart({ song }) {
    const { flag, switchFlag } = useFlagCounter(song, FavCountContext);

    return (
        <span onClick={switchFlag} style={{ color: 'red' }}>
            {
                flag ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
        </span>
    );
}
