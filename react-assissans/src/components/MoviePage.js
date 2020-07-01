import React, { useState, useEffect } from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";

export default function MoviePage({ match }) {
  console.log(match.params.id);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchMovie();
  }, []);
  function fetchMovie() {
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US`
    )
      .then((movie) => movie.json())
      .then((movieItem) => {
        setMovie(movieItem);
      });
  }
  const img = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log(movie);
  return (
    <div>
      <Row>
        <Col>
          <Card
            className="my-5 mx-5"
            style={{ width: "30rem", hieght: "30rem" }}
          >
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>

              <Card.Text>
                <Badge variant="success">{movie.vote_average}</Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p>{movie.overview}</p>
        </Col>
      </Row>
    </div>
  );
}
