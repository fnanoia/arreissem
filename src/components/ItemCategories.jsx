import { NavLink } from "react-router-dom";

function ItemCategories () {
    return(
        <div className="category__item">
            <div><NavLink to="/category/bosch">Bosch</NavLink></div>
            <div><NavLink to="/category/skil">Skil</NavLink></div>
            <div><NavLink to="/category/dewalt">DeWalt</NavLink></div>
        </div>
    )
}

export default ItemCategories;