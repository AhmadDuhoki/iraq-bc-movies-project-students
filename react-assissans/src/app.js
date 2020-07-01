import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import MoviesGrid from "./components/MoviesGrid";
import MoviePage from "./components/MoviePage";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("X");
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleMovies = (moviesResult) => {
    return setMovies(moviesResult);
  };

  function handleQuery(searchText) {
    setQuery(searchText);
  }

  function selectedId(id) {
    setSelectedMovie(id);
  }

  return (
    <div>
      <Navbar handleQuery={handleQuery} handleMovies={handleMovies} />
      <Main moviesData={movies} />
    </div>
  );
}

export default App;
