import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collectionProducts } from "../../Firebase";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../Loader/Loader";
import toast from 'react-hot-toast';

function ItemDetailContainer () {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
   
    useEffect(() =>{

        setLoading(false);

        const ref = doc(collectionProducts, id);
        getDoc(ref).then((response) => {            
            setItem({
                id : response.id,
                ...response.data()
            });
        })
        .catch((err) => {
            toast.error(err);
        });
        
    }, [id]);

    return(
        <div className="item__detail">
        {(loading)?
        <Loader />
        :
        <ItemDetail product={item} />
        }
        </div>
    )
}

export default ItemDetailContainer;