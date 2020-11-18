import React, { useState, useContext } from "react";
// import styles from "./AddMovie.module.scss";
import { MovieContext } from "../../context/movieContext"

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addMovie = (e) => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, price: price, id: (""+Math.random()).substring(2,7)}])
  }

  return (
    <form onSubmit={addMovie}>
      <input type="text" name={name} onChange={updateName} />
      <input type="text" name={price} onChange={updatePrice} />
      <input type="submit" />
    </form>
  );
};

export default AddMovie;
