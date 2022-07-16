import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

export const FunctionProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const [query, setQuery] = useState();
    
    const isOnCart = (id) =>{
        const cartFind = cart.find(((prod) => (prod.id === id)));
        if (cartFind !== undefined) {
            return true;
        }else{
            return false}
    }

    const updateWidget = () =>{
        let quantity = 0;
        cart.forEach((product) => {
            quantity = quantity + product.quantity;
        });
        return quantity
    }

    const totalPrice = () =>{
        let total = 0;
        cart.forEach((product) => {
            total = total + (product.price * product.quantity);
        });
        return total
    }
    
    const addProduct = (product, quantity) =>{
        
        const cartSpread = [...cart];
        const new_product = {...product, quantity};

            cartSpread.push(new_product);
            setCart(cartSpread);
            setQuantity(new_product.quantity);
            setTotal(new_product.price);
    }

    const removeProduct = (id) =>{
        const cartFilter = cart.filter((prod) => (prod.id !== id));
        setCart(cartFilter);
    }

    const clearCart = () =>{
        setCart([]);
    }

    const handleSearch = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const contextValues = {
        cart : cart,
        quantity: quantity,
        total : total,
        addProduct : addProduct,
        isOnCart : isOnCart,
        updateWidget : updateWidget,
        removeProduct : removeProduct,
        clearCart : clearCart,
        totalPrice : totalPrice,

        query : query,
        handleSearch : handleSearch,
        handleSubmit : handleSubmit
    
    }

    return(
        <Provider value={contextValues}>
            {children}
        </Provider>
    )
}


