import { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { context } from "../Context/CartContext";
import toast from 'react-hot-toast';
import Loader from "../Loader/Loader";

function ItemDetail({ product }) {

    const [cartBtn, setCartBtn] = useState(true);
    const [loading, setLoading] = useState(true);
    const { addProduct, isOnCart } = useContext(context);


    useEffect(() =>{
        setLoading(false)
    }, []);

    const onAdd = (selectedCounter) => {
            setCartBtn(false);
            
            if(isOnCart(product.id)){
                toast(`${product.title} ya se agrego al carrito`);  
            }else{
                addProduct(product, selectedCounter);
                toast(`${product.title} agregado al carrito`);
            }
        }
    
    return(
        <div className="card__item__detail">
        {(loading)?
        <Loader />
        :
        <>
        <div>
        <div><img alt={product.id} src={product.pictureUrl}/></div>
        </div>
        <div>
        <div><h4>{product.title}</h4></div>
        <div><p>{product.description}</p>
        <p>${product.price}</p></div>
        {
        (cartBtn) ?
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/> :
        <div className="card__item__detail__added">
        <button>
        <Link to="/cart">Terminar mi compra</Link>
        </button>
        <button>
        <Link to="/">Agregar mas productos</Link>
        </button>
        </div>
        }
        </div>
        </>
        }
        </div>
    )
}

export default ItemDetail;
