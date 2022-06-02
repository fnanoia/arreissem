import CartWidget from "./CartWidget";

function Navbar(){
    
    return (
    <div className="menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#"><CartWidget /></a></li>
        </ul>
    </div>
    )
};

export default Navbar;