# SOLVED ONE BUG  🥳🙌 `<` FINAL WORKING CODE `>` 🎉🎉

- so only update `ListItem.jsx` file.
- The problem was, in previous code, we have a filter function,
- which will change the order of output array each and every time.
- So fixed the issue by using one css property called. `display: block` | `display: none`
- So now all array items will be rendered in output screen,
- But based on the filter condition, we will change the `display`.

## old code

```jsx
import PropTypes from "prop-types";
import Card from "./Card";

export default function ListItem({
    items,
    isFavorite,
    isImportant,
    updateArr,
    removeItem
}) {

    return (
        <section className="list-items">
            {
                items.filter((val) => {
                    return (val?.favorite === isFavorite && val?.important === isImportant);
                }).map((value, index) => {
                    return (
                        <Card
                            key={index}
                            data={value}
                            index={index}
                            removeItem={removeItem}
                            updateArr={updateArr}
                        />
                    );
                })
            }
        </section>
    );
}

ListItem.propTypes = {
    items: PropTypes.array,
    isFavorite: PropTypes.bool,
    isImportant: PropTypes.bool,
    updateArr: PropTypes.func,
    removeItem: PropTypes.func,
};
```

## new code

```jsx
import PropTypes from "prop-types";
import Card from "./Card";

export default function ListItem({
    items,
    isFavorite,
    isImportant,
    updateArr,
    removeItem
}) {
    return (
        <section className="list-items">
            {
                items.map((value, index) => {
                    const filterCondition = (value?.favorite === isFavorite && value?.important === isImportant);
                    const displayStyle = {
                        display: (filterCondition ? "block" : "none")
                    };
                    return (
                        <div key={index} style={displayStyle}>
                            <Card
                                data={value}
                                index={index}
                                removeItem={removeItem}
                                updateArr={updateArr}
                            />
                        </div>
                    );
                })
            }
        </section>
    );
}

ListItem.propTypes = {
    items: PropTypes.array,
    isFavorite: PropTypes.bool,
    isImportant: PropTypes.bool,
    updateArr: PropTypes.func,
    removeItem: PropTypes.func,
};
```
