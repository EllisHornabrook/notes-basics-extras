import React from "react";
// import styles from "./Movie.module.scss";

const Movie = (props) => {
  return (
    <div>
      <h2>{props.movie.name}</h2>
      <p>{props.movie.price}</p>
    </div>
  );
};

export default Movie;
