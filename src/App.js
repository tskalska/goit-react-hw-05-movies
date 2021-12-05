// import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/pages/homepage/Homepage';
import Movies from './components/pages/movies/Movies';
import MovieDetailsPage from './components/pages/movieDetails/MovieDetailsPage';
import Review from './components/pages/movieDetails/Review';
import Cast from './components/pages/movieDetails/Cast';



function App() {
  // const {pathname} = useLocation();

  return (
  <div>
    <Navigation />
    <Routes>
      <Route index path="/" element={<Homepage />} />
      <Route exact strict path="/movies" element={<Movies />} />
      <Route exact path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />}></Route>
        <Route path="review" element={<Review />}></Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Routes>
  </div>
  );
}

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}

export default App;
