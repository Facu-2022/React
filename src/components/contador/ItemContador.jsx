import React, { useState } from 'react';
import './ItemCounter.css'

export const ItemContador = () => {

    const [counter, setCounter]= useState(0)
    const sumar= ()=>{
      setCounter(counter+1)
    }
    const restar= ()=>{
      if(counter>0){
      setCounter(counter-1)
      }else{
        setCounter(0)

      }
    }
    const Reset= ()=>{
      setCounter(0)
    }







  return (
    <>
    <h8>Cantidad: {counter}</h8>
    <div class="botones">
      <button onClick={sumar}>➕</button>
      <button onClick={restar}>➖</button>
      <button onClick={Reset}>👈</button>
    </div>
    </>
  )
}

