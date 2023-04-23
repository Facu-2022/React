import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemContador } from '../contador/ItemContador';




export const ItemDetail= ({Id,Carrera, price,Duracion, Image,category}) => {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body >
        <Card.Title>Carrera de: {Carrera}</Card.Title>
        <Card.Title>Duracion: {Duracion}</Card.Title>
        <Card.Title>Categoria: {category}</Card.Title>
        <Card.Title>Precio: {price}</Card.Title>
        <ItemContador/>
        <hr/>
        <Button variant="success">Agregar al Carrito</Button>

      </Card.Body>
    </Card>
  );
}