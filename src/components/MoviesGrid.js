import React,{useState,useEffect}  from 'react';
import movies from '../files/movies.json';
import MovieCard from '../components/MovieCard';
import style from '../stylesheets/MoviesGrid.module.css';
import axios from 'axios';
/*

Your public key
0380850ef3c7e5a64abf05b75dca03f4
Your private key
e8f0e699eb6b1baa74ff552cb1e071750b963916

*/

function MoviesGrid() {

  const imageURL1 = 'https://gateway.marvel.com/v1/public/characters?ts=2&apikey=0380850ef3c7e5a64abf05b75dca03f4&hash=b8231d464734b9752703672f31414603';
  const [personajes, setPersonajes] = useState([]);
  const consulta = () =>
    axios.get(imageURL1)
      .then(res => {
        //.then((resul) =>
        //setPersonajes(res.data);
        //console.log(res.data.data.results);
        //setPersonajes({ personajes: resul.data.data.results });
        const resul = res.data.data.results;
        setPersonajes(resul);
        //console.log(personajes)

      })
      .catch((error) => console.log(error));
  useEffect(()=>consulta, []
  );
  return (
    <div>
      <ul className={style.MoviesGrid}>
      {//movies.map((movie)=>{
          //return <MovieCard key={ movie.id } movie={ movie } />
          personajes.map((personaje)=>{
          return <MovieCard key={ personaje.id } movie={ personaje } />
        })}
        </ul>
    </div>
  );
}

export default MoviesGrid;
