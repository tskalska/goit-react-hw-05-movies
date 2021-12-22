import {useState} from 'react';
import FilmsList from '../FilmsList';
import styles from './Movies.module.css';


export default function Movies(props){
    const [inputValue, setInputValue] = useState('');
    const [filmsList, setFilmsList] = useState([]);
  
   
  
    const handleInputChange = (event) => {
      setInputValue(event.currentTarget.value) 
    }

    const onSubmit = (inputValue) => {

      return fetch(`https://api.themoviedb.org/3/search/movie/?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US&page=1&include_adult=false&query=${inputValue}`)
      .then(responce=>responce.json())
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
          <FilmsList
           movies={filmsList}
          />
        </header>
      </div>
    );
}