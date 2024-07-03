import { createContext, useContext, useEffect, useState } from "react";
import { NotificationContext } from "./NotificationContext";

const BookmarkCountContext = createContext();

function BookmarkCountProvider({ children }) {
    const [count, setCount] = useState(0);
    const { addNotification } = useContext(NotificationContext);
    const [arr, setArr] = useState([]);

    useEffect(() => {
        addNotification("bookmark count update to ", count);
    }, [count]);

    function addItem(newObj) {
        setArr([...arr, newObj]);
    }

    function removeItem(id) {
        let temp = arr.filter((value) => value.id !== id);
        setArr([...temp]);
    }

    return (
        <BookmarkCountContext.Provider value={{ count, setCount, addItem, removeItem }}>
            {children}
        </BookmarkCountContext.Provider>
    );
}

export { BookmarkCountContext, BookmarkCountProvider };
