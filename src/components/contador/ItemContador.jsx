
import './ItemCounter.css'

export const ItemContador = ({max,modify,cantidad}) => {

    
    const sumar= ()=>{
      modify(cantidad+1)
    }
    const restar= ()=>{
      if(cantidad>0){
      modify(cantidad-1)
      }else{
        modify(0)

      }
    }
    const Reset= ()=>{
      modify(0)
    }







  return (
    <>
    <h8>Cantidad: {cantidad}</h8>
    <div class="botones">
      <button onClick={sumar}>➕</button>
      <button onClick={restar}>➖</button>
      <button onClick={Reset}>👈</button>
    </div>
    </>
  )
}

