import React from "react";
import { Form } from "react-bootstrap";
import FetchData from "./fetchData";

const trending =
  "https://api.themoviedb.org/3/trending/all/day?api_key=754ad3989128c7d8cfcc82e6591e7f2e";

export default function Category(props) {
  const listOfGenres = FetchData({
    path: "genre/movie/list",
    query: "",
    dataType: "genres"
  });

  function handleChange(e) {
    const id = +e.target.value;
    // console.log(e.target.value);

    fetch(trending)
      .then(res => res.json())
      // .then(data=>console.log(data.results)
      .then(data => {
        props.setMovies(
          data.results.filter(movie => {
            return movie.genre_ids.includes(id);
          })
        );
      });
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom" className="mr-2 mt-3">
        <Form.Control as="select" custom onChange={handleChange}>
          <option value="AllMovies">All Movies</option>
          {listOfGenres.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
