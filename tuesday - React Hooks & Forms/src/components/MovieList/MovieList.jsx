import React, { useContext } from "react";
// import styles from "./MovieList.module.scss";
import Movie from "../Movie";
import { MovieContext } from "../../context/movieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map(movie => {
        return <Movie movie={movie} key={movie.id}/>
      })}
    </div>
  );
};

export default MovieList;
