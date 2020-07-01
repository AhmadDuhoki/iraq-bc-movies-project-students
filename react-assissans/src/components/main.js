import React, { useState } from "react";
import MoviesGrid from "./MoviesGrid";
import MoviePage from "./MoviePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Main(props) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Route path="/MoviePage/:id" exact component={MoviePage} />

        <MoviesGrid movies={props.moviesData.map((data) => data)} />
      </BrowserRouter>
    </div>
  );
}
