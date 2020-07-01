import React, { useState } from "react";
import MoviesGrid from "./MoviesGrid";
import MoviePage from "./MoviePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Main(props) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/MoviePage" component={MoviePage} />
      </BrowserRouter>

      <MoviesGrid movies={props.moviesData.map((data) => data)} />
    </React.Fragment>
  );
}
