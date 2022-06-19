import CartWidget from "./CartWidget";
import LogoWidget from "./LogoWidget";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

function Navbar(){
    
    return (
    <>
    <div className="menu__logo">
        <div><LogoWidget /></div>
        <div><SearchBar /></div>
    </div>
    <div className="menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Productos</Link></li>
            <li><Link to="/">Service</Link></li>
            <li><Link to="/">Contacto</Link></li>
            <li><Link to="/"><CartWidget /></Link></li>
        </ul>
    </div>
    </>
    )
};

export default Navbar;