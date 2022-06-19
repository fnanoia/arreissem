import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch, getProductsByCategory } from "../utils/asyncMock";
import ItemList from "./ItemList";

function ItemListContainer(){

    const [items, setItems] = useState([]);
    const {category} = useParams();


    useEffect(() =>{
        if(category === undefined){
        customFetch().then(res => setItems(res))}
        else{
        getProductsByCategory(category).then(res => setItems(res))}
    }, [category]);
    
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