# Doing `ListItems.jsx` logic 💡TEMPORARY💡

## Logics

1. Creating prop types. where items will be an array.
2. create list rendering from props.
    - items is an array
    - key={index} is mandatory. To help react understand that, all rendered items will be uniquely identified by `key`.
3. `<ListItem items={[]} />` Make sure to send some sample value in Component props.

```jsx
import PropTypes from "prop-types";
import Card from "./Card";

export default function ListItem({ items }) { 

    return (
        <section className="list-items">
            {
                // #2 
                items.map((value, index) => {
                    <Card key={index} data={value} />
                })
            }
        </section>
    );
}

// #1
ListItem.propTypes = {
    items: PropTypes.array
};
```
