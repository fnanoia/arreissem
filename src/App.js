import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCategories from "./components/ItemCategories";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App(){
    return (
    <>
    <Navbar />
    <ItemCategories />
    <ItemListContainer greeting="Hello!" />
    <ItemDetailContainer />
    <Footer />
    </>
    )
};

export default App;