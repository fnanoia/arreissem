import { useState } from "react";

function ItemCount({initial, stock, onAdd}){
    const [counter, setCounter] = useState(initial);
    function sumar(){
        if(counter < stock){
        setCounter(counter + 1);
        }else{console.log("Out of stock")}
    }

    function restar(){
        if(counter > 0){
        setCounter(counter - 1);
        }
    }

    function agregar(){
        if(counter > stock){
        console.log("Out of stock");
        }else if(counter == 0){
        console.log("Debes seleccionar al menos 1 producto");
        }else{
        console.log(`Confirmar compra de ${counter} productos`)
        console.log(onAdd);
        }
    }

  return (
    <div className="item__counter">
    <div><button onClick={restar}>-</button></div>
    <div>{counter}</div>
    <div><button onClick={sumar}>+</button></div>
    <div><button onClick={agregar}>Agregar</button></div>
    </div>
  )
}


export default ItemCount;