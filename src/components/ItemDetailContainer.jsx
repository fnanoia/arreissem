import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../utils/asyncMock";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() =>{
        getProductsById(id)
        .then(res => {
            setProduct(res)
    })
    }, []);

    return(
        <div className="item__detail">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;