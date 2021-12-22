import { lazy, Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import styles from './App.module.css';
import Navigation from './components/Navigation/Navigation';


const Homepage = lazy(() => import('./components/pages/homepage/Homepage' /* webpackChunkName: "homepage" */));
const Movies = lazy(() => import('./components/pages/movies/movies/Movies' /* webpackChunkName: "movies" */));
const MovieDetailsPage = lazy(() => import('./components/pages/movieDetails/movieDetails/MovieDetailsPage' /* webpackChunkName: "movies-details" */));
const Review = lazy(() => import('./components/pages/movieDetails/review/Review' /* webpackChunkName: "review" */));
const Cast = lazy(() => import('./components/pages/movieDetails/cast/Cast' /* webpackChunkName: "cast" */));


function App() {

  return (
  <div className = {styles.container}>
    <Navigation />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index path="/" element={ <Homepage />} />
        <Route exact strict path="/movies" element={<Movies />} />
        <Route exact path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="review" element={<Review />}></Route>
        </Route>
        <Route path="*" component={NotFound} />
      </Routes>
    </Suspense> 
  </div>
  );
}

function NotFound() {
  return <span>You have landed on a page that doesn't exist</span>;
}

export default App;
