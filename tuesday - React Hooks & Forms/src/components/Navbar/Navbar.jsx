import React, { useContext } from "react";
// import styles from "./Navbar.module.scss";
import { MovieContext } from "../../context/movieContext";

const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      <h1>Context Recap</h1>
      <p>We have {movies.length} movies.</p>
    </>
  );
};

export default Navbar;
