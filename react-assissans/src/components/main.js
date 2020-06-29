import {React, useState } from "react";
import MoviesGrid from "./MoviesGrid";
import Moviepage from "./MoviePage"
export default function Main(props) {
  const [selectedMovie, setSelectedMovie] =  useState(null)
  console.log(props.moviesData);
  return (
    <React.Fragment>
      {selectedMovie == null && <MoviesGrid  movies={props.moviesData.map((data) => data)} />}
      {selectedMovie != null && <Moviepage />}
      
    </React.Fragment>
  );

}
