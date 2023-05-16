import { createContext, useEffect } from "react"
import { useState } from "react"

export const CartContext= createContext()

const init= JSON.parse(localStorage.getItem(`Carrito`))|| []


export const CartProvider = ({children})=>{
    
    const [carrito,setCarrito]= useState(init)

    useEffect(()=>{
        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    },[carrito])

    const sumarCart= (item)=>{
      setCarrito([...carrito, item])
    }
  
    const calcularCantidad=()=>{
      return carrito.reduce((acc,prod)=> acc+prod.counter,0)
    }
    const precioTotal=()=>{
      return carrito.reduce((acc,prod)=> acc+ prod.price * prod.counter,0)
    }
    const removerItem=(itemId)=>{
      const newCart = carrito.filter ((prod)=> prod.id !== itemId)
      setCarrito(newCart)
    }
    const vaciarCarrito=()=>{
      setCarrito([])
    }

  






    return (
        <CartContext.Provider value={{
            sumarCart,
            calcularCantidad,
            precioTotal,
            removerItem,
            carrito,
            vaciarCarrito
        }}>
            {children}


        </CartContext.Provider>
    )
}