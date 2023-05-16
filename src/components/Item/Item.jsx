import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({id,Carrera, price,Duracion, Image,category}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body >
        <Card.Title><b>{Carrera}</b></Card.Title>
        <Card.Title>Duracion: {Duracion}</Card.Title>
        <Card.Title>Categoria: {category}</Card.Title>
        <Card.Title>Precio: ${price}</Card.Title>
        <Link to={`/detail/${id}`}>
          <Button variant="warning">Inscribirme</Button>
        </Link>
        </Card.Body>
        
    </Card>
    <hr />
    </div>
  );
}
