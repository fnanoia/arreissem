import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
    return(
        <>
        <div className="card__item__detail">
        <div><img alt="" src={product.pictureUrl}/></div>
        <div><h4>{product.title}</h4></div>
        <div><p>{product.description}</p>
        <p>${product.price}</p></div>
        <ItemCount initial={1} stock={5}/>
        </div>
        </>
    )
}

export default ItemDetail;
