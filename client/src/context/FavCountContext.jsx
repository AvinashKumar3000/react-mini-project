import { createContext, useContext, useEffect, useState } from "react";
import { NotificationContext } from "./NotificationContext";

const FavCountContext = createContext();

function FavCountProvider({ children }) {
    const [count, setCount] = useState(0);
    const { addNotification } = useContext(NotificationContext);
    const [arr, setArr] = useState([]);

    useEffect(() => {
        addNotification("favorite count update to ", count);
    }, [count]);

    function addItem(newObj) {
        setArr([...arr, newObj]);
    }

    function removeItem(id) {
        let temp = arr.filter((value) => value.id !== id);
        setArr([...temp]);
    }

    return (

        <FavCountContext.Provider value={{ count, setCount, addItem, removeItem }}>
            {children}
        </FavCountContext.Provider>
    );
}

export { FavCountContext, FavCountProvider };
