import React from "react";
import MoviesGrid from "./MoviesGrid";

export default function Main(props) {
  return (
    <React.Fragment>
      <MoviesGrid movies={props.moviesData.map((data) => data)} />
    </React.Fragment>
  );
}
