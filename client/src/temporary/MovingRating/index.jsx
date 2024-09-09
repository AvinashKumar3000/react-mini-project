import { useState } from "react";
import Card from "./Card";
import MOVIE_LIST from "./MovieListData";

const arr = MOVIE_LIST.map((value) => {
    return value.genre;
});
const options = Array.from(new Set(arr));

export default function MovieRating() {
    const [input, setInput] = useState(options[0]);
    const [average, setAverage] = useState(0);

    function handleChange(e) {
        // find average
        let ratings = MOVIE_LIST.filter(value => value.genre === e.target.value).map(value => value.rating);
        let total = ratings.reduce((prev, curr) => prev + curr);
        let result = total / ratings.length;
        setAverage(result);
        setInput(e.target.value);
    }
    return (
        <>
            <h3>total movies :  {MOVIE_LIST.length}</h3>
            <p>The average rating is : {average}</p>
            <select value={input} onChange={handleChange}>
                {
                    options.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>;
                    })
                }
            </select>

            {
                MOVIE_LIST.filter(value => value.genre === input).map((movie, index) => {
                    return <Card movie={movie} key={index}></Card>;
                })
            }
        </>
    );
}