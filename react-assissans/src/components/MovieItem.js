import React from "react";
import { Card, Badge } from "react-bootstrap";

function MovieItem(props) {
  const { item } = props;
  console.log(item);
  const overview = item.overview.substr(0, 240);
  return (
    <div>
      <Card style={{ width: "20rem", hieght: "10rem" }}>
        <Card.Img variant="top" src={item.poster_path} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <Card.Text>
            <Badge variant="success">{item.vote_average}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default MovieItem;
