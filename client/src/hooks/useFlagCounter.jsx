import { useContext, useState } from "react";

/**
 * 🚩 flag    -> refers to store something as true / false.
 * 🔄️ counter -> count each flag changes and store in a context.
 * 
 * REQUIREMENT. 
 * @param {*} YourContext 
 *      THe your context must have two items which is count, setCount
 *      And it must be an context.
 */
export default function useFlagCounter(item, YourContext) {
    const { count, setCount, addItem, removeItem } = useContext(YourContext);
    const [flag, setFlag] = useState(false);
    function switchFlag() {
        // false -> true     : flag    +1
        // true  -> false    : unFlag  -1
        if (flag) {
            setCount(count - 1);
            removeItem(item.id);
        }
        else {
            setCount(count + 1);
            addItem(item);
        }
        setFlag(!flag);
    }
    return { flag, switchFlag };
}