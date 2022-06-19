import Item from "./Item";

function ItemList({products}){
    return(
        products.map(prod =>
            <Item 
            id = {prod.id}
            title = {prod.title}
            description = {prod.description}
            price = {prod.price}
            pictureUrl = {prod.pictureUrl}
            stock = {prod.stock}
            category = {prod.category}
            key={prod.id}
            />
        )
    )
}

export default ItemList;
