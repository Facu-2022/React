import React, {useState, useEffect} from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [item,setItem]= useState(null)
    const [loading, setLoading]= useState(false)
    const {itemId}=useParams()
  
  
  
   useEffect(()=>{
    setLoading(true)
    pedirProductos()
      .then((res)=>{
        setItem(res.find(carr=> carr.Id === Number(itemId)))
      
      })
  
      .catch((error)=> console.log(error))
      .finally(()=>{setLoading(false)})
  
   },[itemId])
  






  return (
    <section>
        
        <ItemDetail{...item}/>

    </section>
  )
}
