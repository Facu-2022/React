import React, { useEffect, useState } from 'react'
import './item.css'
import { getFirestore } from '../../firebase/config';
import { ItemList } from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';



export const ItemListContainer = ({greeting}) => {

  const [item,setItem]= useState([])
  const [loading, setLoading]= useState(false)
  const {categoryId}= useParams()




  useEffect(() =>{
    setLoading(true)
    const db = getFirestore()
    const productos = categoryId
      ?db.collection('productos').where('category', '==', categoryId)
      : db.collection('productos')
      productos.get()
      .then((res)=>{
            const newItem= res.docs.map((doc)=>{
               return{Id: doc.Id, ...doc.data()};
             });
             setItem(newItem);
         })
         .catch((err)=> console.log(err))
         .finally(()=>{
           setLoading(false)
         });

      },[categoryId,setLoading])




  return (
    <>
    {
      loading
      ?<h9><Spinner>
      <span className="visually-hidden">Loading...</span>
      </Spinner></h9>
      :<ItemList Productos={item}/>
      

    }
    </>
  )
}