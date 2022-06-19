import products from "./Products";

export const customFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res(products)
        }, 3000)
     })
};

export const getProductsById = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res(products.find(prod => prod.id === id))
        }, 300)
     })
};

export const getProductsByCategory = (category) => {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res(products.filter(prod => prod.category === category))
        }, 2000)
     })
};

