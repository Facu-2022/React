import React, { useContext } from 'react'
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {
  const {calcularCantidad}= useContext (CartContext)
  return (
    <div class="cart">
       <FontAwesomeIcon icon={faCartShopping} style={{color: "#fafafa",}} />
       <span>{calcularCantidad()}</span>
    </div>

    
  )
}