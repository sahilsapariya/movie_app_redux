import React, { useState, useEffect } from 'react'

import MovieListing from './MovieListing'
import movieApi from '../common/apis/movieApi'
import { APIKey } from '../common/apis/movieApiKey'

import { addMovies } from '../feature/movies/movieSlice'
import { useDispatch } from 'react-redux'



const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      const response = await movieApi.get(`movie?api_key=${APIKey}`);
      setIsLoading(false)
      dispatch(addMovies(response.data.results));
    };
    fetchMovies();
  }, [])

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing isLoading={isLoading} />
    </>
  )
}

export default Home