import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collectionProducts } from "../Firebase";
import { getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loader from "./Loader";

function ItemListContainer(){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const {category} = useParams();


    useEffect(() =>{

        setLoading(false);

        const ref = category 
        ?
        query(collectionProducts, where("category", "==", category))
        :
        collectionProducts;
        
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
            (loading) ?
            <Loader />
            :
            <ItemList products={items} /> 
            }       
        </div>
        )
};

export default ItemListContainer;