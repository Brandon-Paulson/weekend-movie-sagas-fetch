import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './MovieList.css'
import {CardActions, CardContent, Button, Typography, CardMedia} from '@mui/material';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                    <div key={movie.id} >
                        <Link to={`/details/${movie.id}`}>
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {movie.title}
                        </Typography>
                        <CardMedia
                        component="img"
                        height="194"
                        image={movie.poster}
                        alt={movie.title}
                        />
                      </CardContent>
                      {/* <CardActions>
                      </CardActions> */}
                      </Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}


export default MovieList;