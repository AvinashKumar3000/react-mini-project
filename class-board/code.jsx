import Card from "./Card";
import { NARUTO_ANIME } from "./data";

function Anime() {
    return (
        <>
            {
                NARUTO_ANIME.map((value, index) => {
                    return <Card key={index} obj={value} />
                })
            }
        </>
    );
}

export default Anime;


// Card.jsx

function Card({ obj }) {
    return (
        <>
            <h2>{obj.name}</h2>
            <ol>
                <li>power : {obj.power}</li>
                <li>strength : {obj.strength_level}</li>
                <li>hair color : {obj.hair_color}</li>
            </ol>
        </>
    );
}

export default Card;

// data.js
const NARUTO_ANIME = [
    {
        name: "Naruto Uzumaki",
        power: "Rasengan",
        strength_level: "High",
        hair_color: "Blond"
    },
    {
        name: "Sasuke Uchiha",
        power: "Chidori",
        strength_level: "High",
        hair_color: "Black"
    },
    {
        name: "Sakura Haruno",
        power: "Medical Ninjutsu",
        strength_level: "Medium",
        hair_color: "Pink"
    },
    {
        name: "Kakashi Hatake",
        power: "Sharingan",
        strength_level: "High",
        hair_color: "White"
    }
];

export { NARUTO_ANIME };