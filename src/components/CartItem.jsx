import { useContext } from "react";
import { context } from "./CartContext";

function CartItem({id, title, price, quantity, pictureUrl}){
    
    const { removeProduct } = useContext(context);

    
    return(
            <div className="cart__display__body">
                <div><h4>{title}</h4></div>
                <div>${price}</div>
                <div>{quantity}</div>
                {/*<div ><img alt={id} src={pictureUrl}/></div>*/}
                <div><button onClick={() => {removeProduct(id)}}>Remove</button></div>
            </div>
    )
}

export default CartItem;