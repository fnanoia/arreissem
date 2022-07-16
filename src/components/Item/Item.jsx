import {Link} from "react-router-dom";

function Item({ id, title, pictureUrl}){
    return(
        
        <div className="card__item">
            <div><img alt={id} src={pictureUrl}/></div>
            <div><h4>{title}</h4></div>
            <Link to={`/item/${id}`}>
            <div><button>Ver mas</button></div>
            </Link>
        </div>
        
    )
}

export default Item;