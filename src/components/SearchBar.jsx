import { TbTool } from "react-icons/tb";

function SearchBar(){
    
    return (
    <>
    <input type="search" placeholder="" className="search__bar"></input>
    <button className="search__bar__btn"><TbTool /></button>
    </>
    )
};

export default SearchBar;