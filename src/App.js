// import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/pages/home/Homepage';
import Movies from './components/pages/movies/Movies';
import MovieDetailsPage from './components/pages/movieDetails/MovieDetailsPage';


function App() {
  // const {pathname} = useLocation();

  return (
  <div>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact strict path="/movies" element={<Movies />} />
      <Route path="*" component={NotFound} />
      <Route exact path="movies/:movieId" element={<MovieDetailsPage />} />
    </Routes>
  </div>
  );
}

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}

export default App;
