# FilterSection.jsx  🥳🙌 `<` FINAL WORKING CODE `>` 🎉🎉

```jsx
import PropTypes from "prop-types";

export default function FilterSection({
    isFavorite,
    isImportant,
    filterItems
}) {
    const handleFavoriteClick = () => {
        filterItems(!isFavorite, isImportant);
    }
    const handleImportantClick = () => {
        filterItems(isFavorite, !isImportant);
    }
    return (
        <section className="filter">
            <div onClick={handleImportantClick} className={"tag" + (isImportant ? " selected" : "")} >Important 🏷️</div>
            <div onClick={handleFavoriteClick} className={"tag" + (isFavorite ? " selected" : "")} >Favorite ⭐</div>
        </section>
    );
}

FilterSection.propTypes = {
    isFavorite: PropTypes.bool,
    isImportant: PropTypes.bool,
    filterItems: PropTypes.func
};
```
