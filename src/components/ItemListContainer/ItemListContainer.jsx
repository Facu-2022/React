import React from 'react'
import './item.css'

export const ItemListContainer = (props) => {
  return (
    <div class="Item">
    <h1>{props.greeting}</h1>
    </div>
  )
}