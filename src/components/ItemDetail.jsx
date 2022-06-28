import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";
import { context } from "./CartContext";


function ItemDetail({ product }) {

    const [cartBtn, setCartBtn] = useState(true);
    const { addProduct } = useContext(context);

    const onAdd = (selectedCounter) => {
            setCartBtn(false);
            addProduct(product, selectedCounter);
        }
    
    return(
        <div className="card__item__detail">
        <div><img alt={product.id} src={product.pictureUrl}/></div>
        <div><h4>{product.title}</h4></div>
        <div><p>{product.description}</p>
        <p>${product.price}</p></div>
        {
        (cartBtn) ?
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} /> :
        <>
        <p>Agregado al carrito</p>
        <div className="card__item__detail__added">
        <button>
        <Link to="/cart">Confirmar compra</Link>
        </button>
        </div>
        </>
        
        }
        </div>
    )
}

export default ItemDetail;
