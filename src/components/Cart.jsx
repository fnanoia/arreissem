import { useState, useContext } from "react";
import { context } from "./CartContext";

function Cart(){

    const { cart, addProduct, removeProduct, clearCart } = useContext(context);
    //renderizar los elementos del carrito. con funcionalidad agregar, quitar, limpiar carrito
    
    cart.forEach(element => {
        console.log(element);
    });
        
    return(
            <p>soy el carrito</p>
            )
}

export default Cart;
