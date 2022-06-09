import CartWidget from "./CartWidget";
import LogoWidget from "./LogoWidget";
import SearchBar from "./SearchBar";

function Navbar(){
    
    return (
    <>
    <div className="menu__logo">
        <div><a href="#"><LogoWidget /></a></div>
        <div><SearchBar /></div>
    </div>
    <div className="menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicio Tecnico</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#"><CartWidget /></a></li>
        </ul>
    </div>
    </>
    )
};

export default Navbar;