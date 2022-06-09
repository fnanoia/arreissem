import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import asyncMock from "../utils/asyncMock";
import products from "../utils/Products";

function ItemListContainer({greeting}){

    const [items, setItems] = useState([]);

    useEffect(() =>{
        asyncMock(3000, products)
        .then(res => setItems(res))
    }, [items]);
    
    if(items.length > 0){
    return (
    <>
        <div className="greeting">{greeting}</div>
        <div className="item__list">
            <ItemList products={items} />
        </div>
        
    </>
    )
    }else{
        return(
            <div>
               <div className="greeting">{greeting}</div>
               <p>Cargando...</p> 
            </div>
        )
    }
};

export default ItemListContainer;
