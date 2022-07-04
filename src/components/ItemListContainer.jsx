import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import { collectionProducts } from "../Firebase";
import { getDocs, query, where } from "firebase/firestore";

function ItemListContainer(){

    const [items, setItems] = useState([]);
    const {category} = useParams();


    useEffect(() =>{

        //creo una referencia a mi llamado a la BD que importe desde Firebase.js
        const ref = category 
        ?
        query(collectionProducts, where("category", "==", category))
        :
        collectionProducts;
        
        //metodo getDocs retorna una promesa, le aplico el then para administrar los datos
        getDocs(ref).then((response) => {
            //creo una const para almacenar la respuesta de la promesa, es decir los datos
            //lo mapeo por que la promesa me retorna un array con los productos
            const responseProducts = response.docs.map((doc) => {
                //con el metodo .data() saco la info
                //id es el que genera Firestore por defecto, entonces lo tengo que llamar aparte
                //se lo incluyo a la const y retorno el obj con el id de firebase incluido
                   const responseDataProducts = doc.data();
                   responseDataProducts.id = doc.id;
                   return responseDataProducts
            });

            setItems(responseProducts);
        })
        .catch((err) => {
            console.error(err);
        });

    }, [category]);
//opcional agregar una nueva propiedad al objeto que cargamos a la coleccion
//esta es la que se va a mostrar cuando naveguemos a items/id
//actualmente la ruta nos muestra el id automatico de Firebase

    
    return (    
        <div className="item__list">
            {
            (items.length > 0) ?
            <ItemList products={items} /> : <div className="lds-dual-ring"></div>
            }      
        </div>
        )
};

export default ItemListContainer;