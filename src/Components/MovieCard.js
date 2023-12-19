import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
const MovieCard=({movie:{title,rating,description,posterURL}})=>{
    return(
        <div>
        <Card style={{ width: '18rem' }}>
        <Link to={`/movies/${title}`}>
        <Card.Img variant="top" src={posterURL} /></Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
         {description}<br/>
         {rating}
          </Card.Text>
         
        </Card.Body>
      </Card>
      </div>
    );
}
export default MovieCard;