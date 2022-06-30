import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { context } from "./CartContext";


function CartWidget(){
    
    const { cart, updateWidget } = useContext(context);
   
    return (
        <>
        {cart.length > 0 ?
        <span className="cart__icon">
        <FaShoppingCart/> {updateWidget()} 
        </span>
        : ""}
        </>
    )
};

export default CartWidget;