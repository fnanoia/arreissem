import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategories from "./components/ItemCategories";

function App(){
    return (
    <BrowserRouter>
    <Navbar />
    <ItemCategories />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
    <Footer />
    </BrowserRouter>
    )
};

export default App;