//------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------ STATE AND EFFECT ------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------//

import React, {useState, useEffect} from 'react';
import MyNumber from "./components/MyNumber"

const App = () => {
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<STATE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [randomNumber, setRandomNumber] = useState(0);
  const [mounted, setMounted] = useState(false);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<helper functions>>>>>>>>>>>>>>>>>>>>>>>>>>
  const changeNumber = () => {
    setRandomNumber(Math.random());
  }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<USE-EFFECTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// eg1 - default use effect without any second parameter, will run after every state change. 
  useEffect(() => {
    console.log("I'm running anytime anything changes")
  })
// ComponentDidMount - will only run on component mount 
  useEffect(() => {
    console.log("I'm running at the beginning only")
  },[])
// eg3 - componentDidUpdate
  useEffect(() => {
    console.log("I'm running because my random number state has changed")
  }, [randomNumber])

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<helper functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const toggle = () => {
    setMounted(!mounted)
  }

  const showHideMyNum = ( mounted ? <MyNumber /> : null )

  return (
    <div>
      <h1>Snap!</h1>
      <h2>Match the computers number, with your number!</h2>
      <p>The computer's generated number is {randomNumber}</p>
      <button onClick={changeNumber}>Change computers number</button>
      <button onClick={toggle}>Show my Number</button>
      {showHideMyNum}
    </div>
  );
}
export default App;


//------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------ CONTEXT ------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------//

import React from "react";
import styles from "./App.css";
import { MovieProvider } from "./context/movieContext";
import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;


//------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------ FORMS ------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------//

import React from "react";
// import styles from "./App.css";
import AppForms from "./components/AppForms"

const App = () => {
  return (
    <div>
      <AppForms />
    </div>
  );
};

export default App;