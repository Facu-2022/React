import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({Id,Carrera, price,Duracion, Image,category}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body >
        <Card.Title>Carrera de: {Carrera}</Card.Title>
        <Card.Title>Duracion: {Duracion}</Card.Title>
        <Card.Title>Categoria: {category}</Card.Title>
        <Card.Title>Precio: {price}</Card.Title>
        <Link to={`/detail/${Id}`}>
          <Button variant="warning">Inscribirme</Button>
        </Link>
        
      </Card.Body>
    </Card>
  );
}
