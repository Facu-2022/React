import { carreras } from "../data/carreras"

export const pedirProductos=()=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(carreras)
      reject("Rechazado")
    },2000)
  })
}