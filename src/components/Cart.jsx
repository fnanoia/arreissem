import { useContext } from "react";
import { context } from "./CartContext";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import Form from "./Form";


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
            <>
            <div className="cart__display">
                <div>
                  
                  <div className="cart__display__header">
                    <div><h3>Mi carrito</h3></div>
                    <div><button onClick={clearCart}>Clear</button></div>
                  </div>

                  <div>
                  {cart.map((prod) =>
                  <CartItem 
                  id = {prod.id} title = {prod.title} price = {prod.price} quantity = {prod.quantity} pictureUrl = {prod.pictureUrl}  key={prod.id} />
                  )}
                  </div>

                  <div className="cart__display__footer">
                    <div>Total: {totalPrice()}</div>
                   
                  </div>
                </div>
            </div>
            <Form />
            </>
            }
        </div>
        )
}

export default Cart;

/*

-----------------

            <table className="cart__table">
            <thead>         
              <tr>
                <th colSpan="4"><h3>Mi carrito</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
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
                <td colSpan="2"><button onClick={clearCart}>Clear</button></td>
                <td colSpan="2">Total: {totalPrice()}</td>
              </tr>
            </tbody>
            </table>

*/