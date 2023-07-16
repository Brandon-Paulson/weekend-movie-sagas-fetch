import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import GenreList from '../GenreList/GenreList';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path={`/Details/:genresId`}>
          <GenreList />
        </Route>
      </Router>
    </div>
  );
}


export default App;
