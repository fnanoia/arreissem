import CartWidget from "../Cart/CartWidget";
import LogoWidget from "../LogoWidget/LogoWidget";
import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from "react-router-dom";

function Navbar(){
    
    return (
    <>
    <div className="menu__logo">
        <div><LogoWidget /></div>
        <div><SearchBar /></div>
    </div>
    <div className="menu">
        <ul>
            <li><NavLink to="/category/bosch">Bosch</NavLink></li>
            <li><NavLink to="/category/skil">Skil</NavLink></li>            
            <li><NavLink to="/category/dewalt">DeWalt</NavLink></li>
            <div><NavLink to="/cart"><CartWidget /></NavLink></div>
        </ul>
    </div>
    </>
    )
};

export default Navbar;