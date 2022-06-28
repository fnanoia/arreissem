import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { context } from "./CartContext";


function CartWidget(){
    
    const { quantity } = useContext(context);
   //desarrollar logica para actualizar widget de forma dinamica
   
    /*const [widget, setwidget] = useState(cantidad)

    const sumarWidget = () =>{
        setwidget(cantidad += cantidad)
    return widget
    }
    console.log(cantidad);
    */

    return (
    <span className="cart__icon"><FaShoppingCart/> {quantity}</span>
    )
};

export default CartWidget;