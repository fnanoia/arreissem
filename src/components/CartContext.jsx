import { createContext, useState, useEffect} from "react";

export const context = createContext();

const Provider = context.Provider;

export const FunctionProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        console.log(cart)
    }, [cart]);
    
    const addProduct = (product, quantity) =>{
        
        const cartSpread = [...cart];
        const new_product = {...product, quantity}

        if(isOnCart(product.id)){
            console.log(`${product.title} ya se agrego al carrito`);  
        }else{
            cartSpread.push(new_product);
            setCart(cartSpread);
            setQuantity(new_product.quantity);  
            console.log(`Agregado al carrito: x${quantity} ${product.title}`);
        }
    }

    //verificar si el id del producto ya existe en el carrito. retorna true/false
    const isOnCart = (id) =>{
        const cartFind = cart.find(((prod) => (prod.id === id)));
        if (cartFind !== undefined) {
            return true;
        }else{
            return false}
    }

    /*function removeProduct(){
        setCart();
    }*/
    function clearCart(){
        setCart([]);
    }

    const contextValues = {
        cart : cart,
        quantity: quantity,
        addProduct : addProduct,
        isOnCart : isOnCart
        /*removeProduct : removeProduct,
        clearCart : clearCart*/
    }

    return(
        <Provider value={contextValues}>
            {children}
        </Provider>
    )
}


