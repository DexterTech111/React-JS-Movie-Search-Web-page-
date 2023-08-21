import './App.css';
import {useState, useEffect} from 'react';
import SeacrchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

// omdbapiKey => 5d4435fe

const API_URL = 'https://omdbapi.com?apikey=5d4435fe';




const App = () => {
  //const name = null;
  const [movies, setMovies] = useState([]); 
  const [searchValue, setSearchValeu] = useState(''); 

  //Movie fetch function
const searchMovie = async (title) => {
  const response1 = await fetch(`${API_URL}&s=${title}`);
  const data = await response1.json();
  setMovies(data.Search);
 //console.log(data.Search[0]);
}


  useEffect(() => { 
    searchMovie('Superman');
   }, []);

  return (
    <div className="app">
       <h1>DexFilms</h1>

       <div className='search'>
          <input 
          placeholder="Search for a movie"
          value={searchValue}
          onChange={(e) => setSearchValeu(e.target.value)}
          />
          <img 
            src={SeacrchIcon}
            alt='search'
            onClick={() => searchMovie(searchValue)}
          />

          
       </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => <MovieCard movie1={movie}/> )}
            
          </div>
        ) : (
        <div className="empty">
          <h2>No Movies found:{movies}</h2>
       </div>
        )
      }
      

      </div>
  );
}

export default App;
