import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FunctionProvider } from "./components/Context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import SearchContainer from "./components/SearchBar/SearchContainer";
import Footer from "./components/Footer/Footer";
import {Toaster} from 'react-hot-toast';


function App(){
    return (
    <BrowserRouter>
    <FunctionProvider>

    <Navbar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchContainer />} />
        </Routes>

    <Footer/>
    <Toaster 
    toastOptions={
        {success: 
            {position: 'top-right',
            style: {
                border: '1px solid #4A6572',
                padding: '16px',
                color: '#344955',
            },
            iconTheme: {
                primary: '#344955',
                secondary: '#E9E9EB',
            }},
        error: 
            {position: 'top-right',
            style: {
                border: '1px solid #4A6572',
                padding: '16px',
                color: '#344955',
            },
            iconTheme: {
                primary: '#344955',
                secondary: '#E9E9EB',
            }}
        }
        }
    />
    </FunctionProvider>
    </BrowserRouter>
    )
};

export default App;