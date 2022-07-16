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
    <div className="menu__categories">
        <div><NavLink to="/category/bosch">Bosch</NavLink></div>
        <div><NavLink to="/category/skil">Skil</NavLink></div>            
        <div><NavLink to="/category/dewalt">DeWalt</NavLink></div>
    </div>
    <div className="menu__cart">
        <div><NavLink to="/cart"><CartWidget /></NavLink></div>
    </div>
    </>
    )
};

export default Navbar;
