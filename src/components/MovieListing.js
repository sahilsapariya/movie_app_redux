import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../feature/movies/movieSlice'
import './MovieListing.css'
import MovieCard from './MovieCard'
import CardSkeleton from '../common/skeleton/CardSkeleton'

const MovieListing = ({ isLoading }) => {

  const movies = useSelector(getAllMovies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {!isLoading ? (
            movies &&
            movies.length &&
            movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
          ) : (
            <CardSkeleton cards={20} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieListing