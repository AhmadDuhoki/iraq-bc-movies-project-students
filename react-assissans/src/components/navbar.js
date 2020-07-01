import { Navbar, Nav, Spinner } from "react-bootstrap";
import React, { useState } from "react";

const moviesUrl =
  "https://api.themoviedb.org/3/search/movie/?api_key=1d54e327869a62aba4dc1b58c2b30233";

function navBar(props) {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#E7806B" }}
        className="justify-content-between"
      >
        <Navbar.Brand
          href="#"
          style={{
            fontWeight: "bold",
            fontFamily: "'Yellowtail', cursive",
            fontSize: "35px",
            color: "#573329",
          }}
        >
          Assassins Movies
        </Navbar.Brand>
        <Nav
          className="mr-auto"
          style={{
            fontWeight: "bold",
            fontFamily: "Times New Roman",
            fontSize: "20px",
            color: "#573329",
          }}
        >
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <SearchBox onHandle={props.handleQuery} onSubmit={props.handleMovies} />
      </Navbar>
    </>
  );
}

function SearchBox(props) {
  const [value, setValue] = useState("");
  let [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    moviesData(value).then((moviesArr) => {
      setLoading(false);
      props.onSubmit(moviesArr.results);
    });
  };

  return (
    <>
      <form className="form-inline my-2 " onSubmit={handleSubmit}>
        <input
          style={{ borderColor: "#573329" }}
          className="form-control"
          type="search"
          placeholder="Search for a Movie"
          value={value}
          onChange={handleChange}
        ></input>
        <button
          className=" btn ml-3"
          style={{ backgroundColor: "#E1DDDC" }}
          type="submit"
        >
          Search
        </button>
      </form>
      {loading && <Loading />}
    </>
  );
}

const Loading = () => {
  return (
    <Spinner
      animation="grow"
      role="status"
      variant="secondary"
      className="ml-4"
    >
      <span className="sr-only spin">Loading...</span>
    </Spinner>
  );
};
export default navBar;

function moviesData(query) {
  return fetch(`${moviesUrl}&query=${query}`).then((movies) => movies.json());
}
