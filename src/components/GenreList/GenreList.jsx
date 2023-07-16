// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// function GenreList() {

//     const dispatch = useDispatch();
//     const movies = useSelector(store => store.genres);

//     useEffect(() => {
//         dispatch({ type: 'FETCH_GENRES' });
//     }, []);

//     return (
//         <main>
//             <h1>MovieList</h1>
//             <section className="genres">
//                 {genres.map(genre => {
//                     return (
//                         <div key={genre.id} >
//                             <h3>{genre.title}</h3>
//                             <img src={genre.poster} alt={genre.title}/>
//                         </div>
//                     );
//                 })}
//             </section>
//         </main>

//     );
// }

// export default GenreList;