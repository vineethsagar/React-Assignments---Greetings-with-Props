// write code for Welcome component here
import React from "react";
import "../styles/App.css";

export function Welcome(name) {
  console.log(name);
  return (
    <>
      <h1>Hey ! {name}</h1>
      <h2>Welcome to Newton School.</h2>
    </>
  );
}
