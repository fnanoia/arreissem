import { useState, useContext } from "react";
import { context } from "./CartContext";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import Form from "./Form";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../Firebase";

function Cart(){

    const { cart, clearCart, totalPrice } = useContext(context);
    const [dataId, setDataId] = useState();
    const [formData, setFormData] = useState({
      nombre : "",
      email: "",
      telefono: ""
    });

    const handleOnChange = (e) =>{
      const { name, value } = e.target;
     
      setFormData({
        ...formData,
        [name] : value
      });
    }
    
    const handleSubmit = (e) =>{
      e.preventDefault();
    
    const firebaseObject = {
      buyer : {
        nombre: formData.nombre,
        email : formData.email,
        telefono : formData.telefono
      },
      cart,
      total : totalPrice(),
      date : serverTimestamp()
    }

    const collectionOrders = collection(db, "orders");
    addDoc(collectionOrders, firebaseObject)
    .then((res) => {
      setDataId(res.id);

      clearCart();
    })
    .catch((err) => {
      console.error(err);
    });
    }
    
    
    if(dataId !== undefined){
      return(
        <div className="cart__display__order">Gracias por su compra! Su numero de orden es:<b>{dataId}</b></div>
      )
    }else{

      return(
        <>
            {cart.length === 0 ?
            <div className="cart__display__empty">
            <div>Su carrito esta vacio?</div>
            <div><Link to={`/`}>Ver productos</Link></div>
            </div>
            :
            <>
            <div className="cart__display">

            {cart.map((prod) =>
              <CartItem 
              id = {prod.id} title = {prod.title} price = {prod.price} quantity = {prod.quantity} key={prod.id} />
            )}
             
            <div className="cart__display__footer">
              <div>Total: {totalPrice()}</div>
              <div><button onClick={clearCart}>Clear</button></div>
            </div> 

            </div>
            <Form formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
            </>
            }
        </>
      )
  }
}

export default Cart;