import React, { useEffect, useState } from 'react'
import './item.css'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';



export const ItemListContainer = ({greeting}) => {

  const [item,setItem]= useState([])
  const [loading, setLoading]= useState(false)
  // const param= useParams()
  const {categoryId}= useParams()




 useEffect(()=>{
  setLoading(true)
  pedirProductos()
    .then((res)=>{
      if(categoryId){
        setItem(res.filter(carr=> carr.category===categoryId))
      }else{
        setItem(res)
      }
    console.log(res)
    })

    .catch((error)=> console.log(error))
    .finally(()=>{setLoading(false)})

 },[categoryId])





  return (
    <>
    {
      loading
      ?<h9>Cargando...<Spinner>
      <span className="visually-hidden">Loading...</span>
      </Spinner></h9>
      :<ItemList Productos={item}/>
      

    }
    </>
  )
}