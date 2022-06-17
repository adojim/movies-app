import React from 'react';
import '../stylesheets/MovieCard.css';
import style from '../stylesheets/MovieCard.module.css';


function MovieCard({ movie }) {
  //const imageURL = 'https://image.tmbd.org/t/p/w300' + movie.poster_path;
  const imageURL = movie.thumbnail.path +'.'+ movie.thumbnail.extension;
  //console.log(imageURL);
  return (
    <li className={style.movieCard}>
      <img className={style.movieImage}
        src={imageURL}
        alt={ movie.name } />
      <div>{movie.name}</div>
    </li>

  )
}
export default MovieCard;
