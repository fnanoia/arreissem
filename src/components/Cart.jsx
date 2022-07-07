import { useState, useContext } from "react";
import { context } from "./CartContext";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import Form from "./Form";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../Firebase";



function Cart(){

  //estado que almacena el id de la "orden de compra"
  const [dataId, setDataId] = useState();

  //crear un estado para los inputs del form. puede ser un objeto o muchos estados
    const [formData, setFormData] = useState({
      nombre : "",
      email: "",
      telefono: ""
    });

    //traigo el contexto
    const { cart, clearCart, totalPrice } = useContext(context);

    //funcion que maneja los eventos del formulario controlado. referencio el target
    const handleOnChange = (e) =>{

      const { name, value } = e.target;
     
    //actualizo el estado con la informacion que me viene del formulario a traves de props y la funcion manejadora de eventos
      setFormData({
        ...formData,
        [name] : value
      });
    }
    
    //funcion para cargar la compra a la BD
    const handleSubmit = (e) =>{
    
      e.preventDefault();
    
    //creo un objeto con la informacion que quiero subir a FireBase
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

    //check
    console.log(firebaseObject);

    //metodo addDoc, primero indico a la coleccion donde quiero cargar las ordenes de compra
    const collectionOrders = collection(db, "orders");
    addDoc(collectionOrders, firebaseObject)
    .then((res) => {
      setDataId(res.id);

      //una vez que hago la compra, limpio el carrito. agregar un effecto para jugar con los renders
      clearCart();
    })
    .catch((err) => {
      console.error(err);
    });
    }
    
    //agregar condicional if para mostrar la orden de compra
    //renderizar los elementos del carrito. con funcionalidad agregar, quitar, limpiar carrito
    //si no hay productos en el carrito mostrar un mensaje que avise y un boton que regrese a la navegacio
    
    if(dataId !== undefined){
      return(
        <>
        <p>Gracias por su compra. Su numero de orden es {dataId}</p></>
      )
    }else{


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
            {/*pasar por prompt al Form, las funciones que manejen el evento y estados para los inputs*/}
            <Form formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
            </>
            }
        </div>
        )
}
}
export default Cart;