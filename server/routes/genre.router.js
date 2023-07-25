const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// router.get('/', (req, res) => {

//   const query = `SELECT * FROM genres ORDER BY "name" ASC`;
//   pool.query(query)
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all movies', err);
//       res.sendStatus(500)
//     })

// });


router.get('/', (req, res) => {
  let genresId = req.params.genreId;
  console.log('WHAT IS THIS', genresId);
  const query = `SELECT name, title, poster, description, movie_id FROM genres 
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies_genres.movie_id = movies.id;`
    pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

// WHERE genres.id = ${genresId};`


// router.get('/details/:genreId', (req, res) => {
//   let genresId = req.params.genreId;
//   console.log('WHAT IS THIS', genresId);
//   const query = `SELECT * FROM genres 
//   JOIN movies_genres ON genres.id = movies_genres.id
//   WHERE id = ${genresId};`;
//   pool.query(query)
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get specific genre', err);
//       res.sendStatus(500)
//     })
// });


module.exports = router;