import React, { useState,useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
import firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'


export const Checkout = () => {

    const {carrito,precioTotal,vaciarCarrito} = useContext(CartContext)

   const [email,setEmail]= useState("")
   const [nombre,setNombre]= useState("")
   const [apellido,setApellido]= useState("")
   const [telefono,setTelefono]= useState("")


   const recarga = (e)=>{
    e.preventDefault()
    console.log("Email:", email)
    console.log("Nombre:", nombre)
    console.log("Apellido:", apellido)
    console.log("Telefono:", telefono)
   
   const orden = {
    buyer:{
        email,
        nombre,
        apellido,
        telefono
    },
    item: carrito,
    total_price: precioTotal(),
    data: firebase.firestore.Timestamp.fromDate(new Date())
    }
    console.log(orden)


    const db = getFirestore()

    const ordenes = db.collection('ordenes')
 
    ordenes.add(orden)
      .then((res)=>{
         Swal.fire({
             icon: 'success',
             title: 'Compra Exitosa',
            //  text: 'so numero de orden es: ${res.Id}',
             willClose: ()=>{
                vaciarCarrito()
             }
            })
 
 
    })
    
   }



  







  return (
    <div>
        <h3>Terminar Compra</h3>
        <hr />
        <form onSubmit={recarga}    className='container mt-3'>
            <div className='form-group'>
                <label htmlFor=''>Email</label>
                <input type="email" className='form-control' onChange={(e)=> setEmail(e.target.value)} value={email} />
            </div>
            <div className='form-group'>
                <label htmlFor=''>Nombre</label>
                <input type="text" className='form-control' onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className='form-group'>
                <label htmlFor=''>Apellido</label>
                <input type="text" className='form-control' onChange={(e)=> setApellido(e.target.value)} value={apellido}/>
            </div>
            <div className='form-group'>
                <label htmlFor=''>Telefono</label>
                <input type="number" className='form-control' onChange={(e)=> setTelefono(e.target.value)} value={telefono}/>
            </div>
            <hr />
            <Button type='submit' className='btn btn-success'>Finalizar</Button>
            <hr />
            <Link to='/Cart' className='btn btn-warning'>Volver al Carrito</Link>

            

        </form>
    </div>
  )
}
