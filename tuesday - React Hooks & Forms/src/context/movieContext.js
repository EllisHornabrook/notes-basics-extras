import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
          name:'Avengers - Infinity War',
          price: '£10',
          id: "26593",
        },
        {
          name: 'Iron Man',
          price: '£12',
          id: "95771",
        },
        {
          name: 'Doctor Strange',
          price: '£13',
          id: "76143",
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};