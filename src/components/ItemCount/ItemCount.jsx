import { useState } from "react";
import toast from 'react-hot-toast';

function ItemCount({initial, stock, onAdd}){

    const [counter, setCounter] = useState(initial);

    function add(){
        if(counter < stock){
        setCounter(counter + 1);
        }else{toast("Out of stock");}
    }

    function substract(){
        if(counter > 0){
        setCounter(counter - 1);
        }
    }

    function push(){
        if(counter > stock){
        toast("Out of stock")
        }else if(counter === 0){
        toast("Debes seleccionar al menos 1 producto")
        }else{
        onAdd(counter);
        }
    }

  return (
    <div className="item__counter">
    <div><button onClick={substract}>-</button></div>
    <div>{counter}</div>
    <div><button onClick={add}>+</button></div>
    <div><button onClick={push}>Agregar</button></div>
    </div>
  )
}


export default ItemCount;