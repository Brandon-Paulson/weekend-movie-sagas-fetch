import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';


function GenreList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const handleClick = () => {
        history.push('/')
    }
const [movieId, setMovieId] = useState('')

const {genreId} = useParams();
console.log(genreId)


if (movieId === genreId) {
    return 
}


//pass movie function using url
    useEffect(() => {
        dispatch({ type: 'FETCH_SPECIFIC_MOVIE' });
    }, []);

    return (
        <main>
            <section className="genres">
                {movies.map(genre => {
                    return (
                        <div key={genre.id} >
                            <h1>{genre.title}</h1>
                            <img src={genre.poster} alt={genre.title}/>
                            <h2>{genre.description}</h2>
                        </div>
                    );
                })}
            </section>
            <button onClick={handleClick}> Return to Home</button>
        </main>

    );
}

export default GenreList;