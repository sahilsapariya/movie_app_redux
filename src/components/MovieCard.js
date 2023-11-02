import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";


const MovieCard = (props) => {
    const { data } = props;

  return (
    <div className="card-item">
      <div className="card-inner">
        <Link to={`/movie/`}>
          {<img src={IMGPATH + data.poster_path} alt={data.title} /> || (
            <Skeleton />
          )}
        </Link>
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <h4>{data.title || <Skeleton baseColor='#2020202' highlightColor='#444' />}</h4>
          <p>{data.release_date || <Skeleton />}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard