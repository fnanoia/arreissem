import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collectionProducts } from "../Firebase";
import { getDoc, doc } from "firebase/firestore";


function ItemDetailContainer () {
    const [item, setItem] = useState({});
    const {id} = useParams();
   
    useEffect(() =>{
        const ref = doc(collectionProducts, id);
        getDoc(ref).then((response) => {            
            setItem({
                id : response.id,
                ...response.data()
            });
        })
        .catch((err) => {
            console.error(err);
        });
        
    }, [id]);

    return(
        <div className="item__detail">
            <ItemDetail product={item} />
        </div>
    )
}

export default ItemDetailContainer;