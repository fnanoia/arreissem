import ItemCount from "./ItemCount";

function ItemListContainer(props){
    
    return (
    <>
        <div className="greeting">{props.greeting}</div>
        <ItemCount initial={1} stock={5} />
    </>
    )
};

export default ItemListContainer;