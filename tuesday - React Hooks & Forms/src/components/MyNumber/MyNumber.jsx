import React, { useEffect } from "react";
// import styles from "./MyNumber.module.scss";

const MyNumber = () => {
  useEffect(() => {
// This gets called after every render, by default
    console.log("I am rendering MyNumber");
// If you want to impliment componentWillUnmount, return a function here, and React will call it prior to unmounting
    return () => console.log("I am unmounting MyNumber");
  })

  return (
    <div>
      <p>MyNumber is {Math.random()}</p>
    </div>
  );
};

export default MyNumber;
