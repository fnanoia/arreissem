import { BsSearch } from "react-icons/bs";

function SearchBar(){
    
    return (
    <>
    <input type="search" placeholder="" className="search__bar"></input>
    <button className="search__bar__btn"><BsSearch /></button>
    </>
    )
};

export default SearchBar;