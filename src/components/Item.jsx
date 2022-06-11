function Item({ id, title, pictureUrl}){
    return(
        <div className="card__item">
            <div><img alt="" src={pictureUrl}/></div>
            <div><h4>{title}</h4></div>
        </div>
    )
}

export default Item;