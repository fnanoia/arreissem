import Item from "./Item";

function ItemList({products}){
    return(
        products.map(p =>
            <Item 
            id = {p.id}
            title = {p.title}
            description = {p.description}
            price = {p.price}
            pictureUrl = {p.pictureUrl}
            key={p.id}
            />
        )
    )
}

export default ItemList;
