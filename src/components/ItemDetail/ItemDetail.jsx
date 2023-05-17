import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import { ItemContador } from '../contador/ItemContador';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';






export const ItemDetail= ({id,Carrera, price,Duracion, Image,category,stock,name}) => {


  const navigate= useNavigate()

  const volverAtras=()=>{
    navigate(-1)
  }

  const {sumarCart}= useContext(CartContext)







  const [counter, setCounter]= useState(0)

  const sumarCarrito =()=>{
    const newItem={
      Carrera,
      id,
      name,
      price,
      Image,
      category,
      counter
      
  
    }
    console.log(newItem)
    sumarCart(newItem)
    Swal.fire({
      icon: 'success',
      title: `Carrera Agregada al carrito`,
      timer: 1000
    })
  }




  return (
    <div className='cuerpo2'>
    <Card style={{ width: '20rem' }}>
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
    </div>
  );
}