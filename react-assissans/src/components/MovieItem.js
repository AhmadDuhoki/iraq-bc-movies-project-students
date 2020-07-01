import React from "react";
import { Card, Badge } from "react-bootstrap";


function MovieItem(props) {
  const { item } = props;
  const img = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
  console.log(item);

  const overview = item.overview.substr(0, 240);
  return (
    <div>
      <Card style={{ width: "20rem", height: "50rem" ,margin:"10px",border:"3px solid #E7806B" ,borderRadius:"8px"}}>
        <Card.Img variant="top" style={{padding:"2px" , borderRadius:"8px"}} src={img} />
        <Card.Body>
          <Card.Title style={{fontWeight:"bold",fontFamily:"'Lobster', cursive" ,color:"#573329"}}>{item.title}</Card.Title>
          <Card.Text style={{fontFamily:"times New Roman",color:"#573329"}}>{overview}</Card.Text>
          <Card.Text>
            <Badge variant="success">{item.vote_average}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default MovieItem;
