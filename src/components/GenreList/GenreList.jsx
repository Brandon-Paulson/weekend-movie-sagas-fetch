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
// const [movieId, setMovieId] = useState('')


const {genresId} = useParams();
// console.log('WHAT IS USE PARAMS ', genresId)
// console.log('WHAT IS MOVIES', movies);


for (const movie of movies) {
    // console.log('FOR OF LOOP', movie);
    // console.log(genresId);
     if (movie.id === genresId) {
    return (
        <main>
            <section className="genres">
                {movie.map(specificMovie => {
                    return (
                        <div key={specificMovie.id} >
                            <h1>{specificMovie.title}</h1>
                            <img src={specificMovie.poster} alt={specificMovie.title}/>
                            <h2>{specificMovie.description}</h2>
                        </div>
                    );
                })}
            </section>
            <button onClick={handleClick}> Return to Home</button>
        </main>

    );
}
}

//pass movie function using url
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_SPECIFIC_MOVIE' });
    // }, []);

    // return (
    //     <main>
    //         <section className="genres">
    //             {movies.map(movie => {
    //                 return (
    //                     <div key={movie.id} >
    //                         <h1>{movie.title}</h1>
    //                         <img src={movie.poster} alt={movie.title}/>
    //                         <h2>{movie.description}</h2>
    //                     </div>
    //                 );
    //             })}
    //         </section>
    //         <button onClick={handleClick}> Return to Home</button>
    //     </main>

    // );
}

export default GenreList;