import ItemCount from "./ItemCount";

function Item({ id, title, description, price, pictureUrl}){
    return(
        <div className="card__item">
            <div><img alt="" src={pictureUrl}/></div>
            <div><h4>{title}</h4></div>
            <div><p>{description}</p>
            <p>${price}</p></div>
            <ItemCount initial={1} stock={5}/>
        </div>
    )
}

export default Item;