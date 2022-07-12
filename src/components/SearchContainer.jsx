import { useEffect, useState, useContext } from "react";
import { context } from "./Context/CartContext";
import { useParams } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { collectionProducts } from "../Firebase";
import ItemList from "./ItemList";
import Loader from "./Loader";

function SearchContainer(){

    const { query } = useContext(context);

    const [searchedItems, setSearchedItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {search} = useParams();

    useEffect(() =>{

        setLoading(false);

        const ref = collectionProducts;

        getDocs(ref).then((response) => {

            const responseSearch = response.docs.map((doc) => {
                const responseDataSearch = doc.data();
                responseDataSearch.id = doc.id;
                return responseDataSearch;
            });

            const responseSearchFilter = responseSearch.filter(
            (prod) => prod.title.toLowerCase().includes(query));
            
            setSearchedItems(responseSearchFilter);
            
        })
        .catch((err) => {
            console.error(err);
        });

    }, [search]);

    
    if(searchedItems.length === 0){
    return(
        <div className="item__list">No hay resultados</div>
    )};
        
    return(

        <div className="item__list">
            {
            (loading) ?
            <Loader />
            :
            <ItemList products={searchedItems} /> 
            }       
        </div>
    )   
}

export default SearchContainer;