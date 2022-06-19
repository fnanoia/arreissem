import ItemCount from "./ItemCount";

function ItemDetail({ id, title, description, price, pictureUrl, stock }) {
    return(
        <div className="card__item__detail">
        <div><img alt={id} src={pictureUrl}/></div>
        <div><h4>{title}</h4></div>
        <div><p>{description}</p>
        <p>${price}</p></div>
        <ItemCount initial={1} stock={stock}/>
        </div>
    )
}

export default ItemDetail;
