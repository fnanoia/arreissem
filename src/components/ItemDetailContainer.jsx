import { useEffect, useState } from "react";
import asyncMock from "../utils/asyncMock";
import product from "../utils/Product";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer () {
    const [item, setItem] = useState([]);

    useEffect(() =>{
        asyncMock(2000, product)
        .then(res => setItem(res))
    }, [item]);

    return(
        <>
        <div className="item__detail">
            <ItemDetail product={item} />
        </div>
        </>
    )
}

export default ItemDetailContainer;