import React from 'react'
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
  return (
    <div class="cart">
       <FontAwesomeIcon icon={faCartShopping} style={{color: "#fafafa",}} />
       1
    </div>

    
  )
}