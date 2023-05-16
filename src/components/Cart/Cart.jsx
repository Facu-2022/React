import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


export const Cart = () => {

  const { carrito, precioTotal, removerItem, vaciarCarrito } = useContext(CartContext)
  return (
    <div className='container my-5'>
      {
        carrito.length === 0
          ? <>
            <h3>Carrito Vacio</h3>
            <Link to='/' className='btn btn-warning'>Volver a comprar</Link>

          </>

          : <>
            <h3>Resumen de Compras</h3>
            <hr />
            {
              carrito.map((prod) => (
                <>

                  <div className='lista'>
                    <h6>{prod.Carrera}</h6>
                    <p>$ {prod.price}</p>
                    <p>cantidad: {prod.counter} </p>
                    <Button className='btn btn-danger' onClick={() => removerItem(prod.id)}>
                      Borrar
                    </Button>
                    <hr />


                  </div>


                </>
              ))
            }
            <hr />
            <strong>TOTAL ${precioTotal()}</strong>
            <hr />
            <Button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</Button>
            <hr />
            <Link className='btn btn-success' to='/Checkout'>
              Terminar Compra
            </Link>
          </>
      }


    </div>

  )
}
