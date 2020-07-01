import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieItem from "./MovieItem";
import MoviePage from "./MoviePage";
import { Link } from "react-router-dom";
function MoviesGrid(props) {
  return (
    <Container className="mt-5">
      <Row>
        {props.movies.map((movies) => (
          <Link to={`/MoviePage/${movies.id}`}>
            <Col lg="6">
              <MovieItem item={movies} />
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
}
export default MoviesGrid;
