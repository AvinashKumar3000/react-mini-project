import './cardStyle.css';

export default function Card({ movie }) {
    return (
        <div className='card'>
            <h4 className='movie-name'>{movie.title}</h4>
            <ul>
                <li><span className='key'>director</span> : {movie.director}</li>
                <li><span className='key'>releaseYear</span> : {movie.releaseYear}</li>
                <li><span className='key'>genre</span> : {movie.genre}</li>
                <li><span className='key'>rating</span> : {movie.rating}</li>
            </ul>
        </div>
    )
}