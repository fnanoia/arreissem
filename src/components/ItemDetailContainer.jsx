import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../utils/asyncMock";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer () {
    const [item, setItem] = useState({});
    const {id} = useParams();
    
    useEffect(() =>{
        getProductsById(id)
        .then(res => {
            setItem(res)
    })
    }, []);

    return(
        <div className="item__detail">
            <ItemDetail product={item} />
        </div>
    )
}

export default ItemDetailContainer;