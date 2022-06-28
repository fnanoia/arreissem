import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategories from "./components/ItemCategories";
import { FunctionProvider } from "./components/CartContext";

function App(){
    return (
    <BrowserRouter>
    <FunctionProvider>

    <Navbar />
    <ItemCategories />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>

    </FunctionProvider>
    <Footer />
    </BrowserRouter>
    )
};

export default App;