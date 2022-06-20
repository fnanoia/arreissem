import { useState } from "react";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import ItemCount from "./ItemCount";

function ItemDetail({ id, title, description, price, pictureUrl, stock }) {

    const [cart, setCart] = useState(true);

    const onAdd = (selectedCounter) => {
            setCart(false);
            console.log(`Agregado al carrito: x${selectedCounter} ${title}`);
        }
    
    return(
        <div className="card__item__detail">
        <div><img alt={id} src={pictureUrl}/></div>
        <div><h4>{title}</h4></div>
        <div><p>{description}</p>
        <p>${price}</p></div>
        {
        (cart) ?
        <ItemCount initial={1} stock={stock} onAdd={onAdd} /> :
        <>
        <p>Agregado al carrito</p>
        <div className="card__item__detail__added">
        <button>
        <Link to="/cart">Confirmar compra<CartWidget /></Link>
        </button>
        </div>
        </>
        
        }
        </div>
    )
}

export default ItemDetail;
