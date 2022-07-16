import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collectionProducts } from "../../Firebase";
import { getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import toast from 'react-hot-toast';

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
            
            const responseProducts = response.docs.map((doc) => {
                
                   const responseDataProducts = doc.data();
                   responseDataProducts.id = doc.id;
                   return responseDataProducts
            });

            setItems(responseProducts);
        })
        .catch((err) => {
            toast.error(err);
        });

    }, [category]);
    
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