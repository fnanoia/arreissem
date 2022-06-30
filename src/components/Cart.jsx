import { useContext } from "react";
import { context } from "./CartContext";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

function Cart(){

    const { cart, clearCart, totalPrice } = useContext(context);
    
    //renderizar los elementos del carrito. con funcionalidad agregar, quitar, limpiar carrito
    //si no hay productos en el carrito mostrar un mensaje que avise y un boton que regrese a la navegacio

    return(
    
        <div className="cart__checkout">
            {cart.length === 0 ?
            <div>
            <div>Aun no se agregaron productos</div>
            <Link to={`/`}>
            <p>Ver productos</p>
            </Link>
            </div>
            :
            <table className="cart__table">
            <thead>         
              <tr>
                <th colspan="4"><h3>Mi carrito</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="4">
                    {cart.map((prod) =>
                        <CartItem 
                        id = {prod.id}
                        title = {prod.title}
                        price = {prod.price}
                        quantity = {prod.quantity}
                        key={prod.id}
                        />)}
                </td>
              </tr>
              <tr>
                <td colspan="2"><button onClick={clearCart}>Clear</button></td>
                <td colspan="2">Total: {totalPrice()}</td>
              </tr>
            </tbody>
            </table>
            }
        </div>
        )
}

export default Cart;
