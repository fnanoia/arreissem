import { useContext } from "react";
import { context } from "./CartContext";

function CartItem({id, title, price, quantity}){
    
    const { removeProduct } = useContext(context);

    
    return(
        <table className="cart__table">
        <tbody>
            <tr>
                <td><h4>{title}</h4></td>
                <td>${price}</td>
                <td>x{quantity}</td>
                <td><button onClick={() => {removeProduct(id)}}>X</button></td>
            </tr>
        </tbody>
        </table>
        
    )
}

export default CartItem;