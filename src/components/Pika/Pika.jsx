import React, { useEffect, useState } from 'react'

 export const Pika = () => {

    const [pokemon, setPokemon]= useState("");

    const [id, setId]= useState(1);

    

    useEffect(()=>{
       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
       .then((res)=> res.json())
       .then((data)=> {
        setPokemon({
            numero: data.id,
            nombre: data.name,
            img: data.sprites.front_default,
        })
       })
    },[id])


    const anterior=()=>{
        id>1 && setId (id-1)
    }
    const siguiente= ()=>{
        setId(id+1)
    }




  return (
    <>
    <div>
    <h3>{pokemon.numero}</h3>
    <h3>{pokemon.nombre}</h3>
    <img src={pokemon.img} alt="" />
    </div>
    <div>
        <button onClick={anterior}>anterior</button>
        <button onClick={siguiente}>siguiente</button>
        
    </div>
    </>
  )
}
