import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'





export const ItemList = ({Productos=[]}) => {
  return (
    <>
    <div>
        <h1><b>Nuestras Carreras</b></h1>
        
    </div>
    <div class="cuerpo">
      {Productos.map((item)=> <Item {...item} key={item.Id}/>)}
    </div>
    </>
    
  )
}

