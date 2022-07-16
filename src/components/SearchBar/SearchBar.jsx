import { useContext } from "react";
import { context } from "../Context/CartContext";
import { TbTool } from "react-icons/tb";
import { Link } from  "react-router-dom";

function SearchBar(){
    
    const { handleSearch, handleSubmit } = useContext(context);

    return (
    <form>
    <input name="search" 
    type="text" 
    className="search__bar" 
    onChange={handleSearch}
    ></input>
    
    
    <Link to="/search">
    <button onSubmit={handleSubmit} className="search__bar__btn"><TbTool /></button>
    </Link>
    </form>
    
    )
};

export default SearchBar;