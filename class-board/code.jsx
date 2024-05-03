// Card.jsx file
function Card({ title, hero, heroine }) {
    return (
        <fieldset>
            <legend>{title}</legend>
            <ul>
                <li>{hero}</li>
                <li>{heroine}</li>
            </ul>
        </fieldset>
    );
}

export default Card;

// ParentComponent.jsx
import Card from "./Card";

function ParentComponent() {

    const movies = [
        {
            title: "Enthiran",
            hero: "Rajini",
            heroine: "Aishwarya Rai"
        },
        {
            title: "Leo",
            hero: "Vijay",
            heroine: "trisha"
        },
        {
            title: "Mangatha",
            hero: "Ajith kumar",
            heroine: "trisha"
        },
        {
            title: "PK",
            hero: "Amir khan",
            heroine: "Anushka sharma"
        }

    ]
    return (
        <>
            {
                movies.map((value) => {
                    return <Card title={value.title} hero={value.hero} heroine={value.heroine} />
                })
            }
        </>
    );
}

export default ParentComponent;
