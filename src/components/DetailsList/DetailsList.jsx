import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function DetailsList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    console.log('THIS IS NEW GENRES', genres)
    const handleClick = () => {
        history.push('/')
    }
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE' })
        dispatch({type: 'FETCH_GENRES'});
    }, []);
    // const [movieId, setMovieId] = useState('')


    const { movieId } = useParams();
    console.log('WHAT IS USE PARAMS ', movieId)
    console.log('WHAT IS MOVIES', movies);

    const movieItem = movies.find(m => m.id == movieId);
    const genreItem = genres.filter(g=> g.movie_id == movieId);
    const genreLoop = [];

     for( const i of genreItem) {
         genreLoop.push(i.name);
    }

    console.log(genreLoop);

    return (
        <main>
            <div key={movieItem.id} >
                <h1>{movieItem.title}</h1>
                <h3>{genreLoop}</h3>
                <img src={movieItem.poster} alt={movieItem.title} />
                <h2>{movieItem.description}</h2>
            </div>
           <button onClick={handleClick}> Return to Home</button>

        </main>

    );
}
// for (const movie of movies) {

//     // console.log('FOR OF LOOP', movie);
//     // console.log(genresId);
//     if (movie.id === movieId) {
//         return (
//             <main>
//                 <section className="genres">
//                     {movie.map(specificMovie => {
//                         return (
//                             <div key={specificMovie.id} >
//                                 <h1>{specificMovie.title}</h1>
//                                 <img src={specificMovie.poster} alt={specificMovie.title} />
//                                 <h2>{specificMovie.description}</h2>
//                             </div>
//                         );
//                     })}
//                 </section>
//                 <button onClick={handleClick}> Return to Home</button>
//             </main>

//         );
//     }
// }

//pass movie function using url


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
// }

export default DetailsList;