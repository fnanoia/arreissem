import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App(){
    return (
    <>
    <Navbar />
    <ItemListContainer greeting="Hello!" />
    <Footer />
    </>
    )
};

export default App;