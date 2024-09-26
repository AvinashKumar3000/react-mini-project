# `index.jsx`

```jsx
import { useState } from "react";
import FilterSection from "./FilterSection";
import Header from "./Header";
import ListItem from "./ListItems";

const DEFAULT_VALUE = [
    { text: 'buy ice cream 🍧', time: '10:00 AM', important: false, favorite: false, done: false },
    { text: 'buy chocolates 🍫', time: '10:00 AM', important: false, favorite: false, done: false },
];

function MyMiniApp() {
    const [arr, setArr] = useState(DEFAULT_VALUE);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isImportant, setIsImportant] = useState(false);

    const addItem = (newObj) => {
        const updated_arr = [...arr, newObj];
        setArr(updated_arr);
    }
    const removeItem = (remove_index) => {
        const updated_arr = arr.filter((val, idx) => {
            return idx != remove_index;
        });
        setArr(updated_arr);
    }
    const updateArr = (index, updatedObj) => {
        arr[index] = updatedObj;
        const updated_arr = [...arr]; // creating new array.
        setArr(updated_arr);
    }
    const filterItems = (favorite, important) => {
        setIsFavorite(favorite);
        setIsImportant(important);
    }

    return (
        <div className="container">
            <div id="app">
                <div className="title">MY MINI APPLICATION</div>
                <Header addItem={addItem} />
                <FilterSection
                    isFavorite={isFavorite}
                    isImportant={isImportant}
                    filterItems={filterItems}
                />
                <ListItem
                    isFavorite={isFavorite}
                    isImportant={isImportant}
                    updateArr={updateArr}
                    removeItem={removeItem}
                    items={arr}
                />
            </div>
        </div>
    );
}

export default MyMiniApp;
```
