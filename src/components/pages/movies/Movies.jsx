import {useState} from 'react';
import MoviesList from './MoviesList';
import styles from './Movies.module.css';
import { fetchMoviesByTitle } from '../../../mowiesApi'


export default function Movies(props){
    const [inputValue, setInputValue] = useState('');
    const [filmsList, setFilmsList] = useState([]);
  
   
  
    const handleInputChange = (event) => {
      setInputValue(event.currentTarget.value) 
    }

    const onSubmit = (inputValue) => {
      
      fetchMoviesByTitle(inputValue)
      .then(data=>setFilmsList(data.results))
    }

  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(inputValue);
      setInputValue(event.currentTarget.value);
      event.target.reset();
    }

  
    return (
      <div>
        <header className="Searchbar">
          <form className= {`SearchForm ${styles.searchForm}`} onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
  
            <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
            onChange={handleInputChange}
            >
            </input>
          </form>
          <MoviesList
           movies={filmsList}
          />
        </header>
      </div>
    );
}