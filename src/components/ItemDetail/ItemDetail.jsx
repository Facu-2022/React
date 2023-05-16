import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemContador } from '../contador/ItemContador';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';







export const ItemDetail= ({Id,Carrera, price,Duracion, Image,category,stock,name}) => {


  const navigate= useNavigate()

  const volverAtras=()=>{
    navigate(-1)
  }

  const {sumarCart}= useContext (CartContext)







  const [counter, setCounter]= useState(0)

  const sumarCarrito =()=>{
    const newItem={
      Carrera,
      Id,
      price,
      Image,
      category,
      counter
      
  
    }
    console.log(newItem)
    sumarCart(newItem)
  }




  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body >
        <Card.Title><b>{Carrera}</b></Card.Title>
        <Card.Title>Duracion: {Duracion}</Card.Title>
        <Card.Title>Categoria: {category}</Card.Title>
        <Card.Title>Precio: {price}</Card.Title>
        <ItemContador max={stock} modify={setCounter} cantidad={counter}/>
        <hr/>
        <Button onClick={sumarCarrito} variant="success">Agregar al Carrito</Button>
        <hr />
        <Link to='/Cart' className='btn btn-primary'>Ir al Carrito</Link>
        <hr />
        <Button onClick={volverAtras} variant="warning">Volver atras</Button>

      </Card.Body>
    </Card>
  );
}