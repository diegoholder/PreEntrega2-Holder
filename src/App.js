import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx"

function App() {
  return (
    <div>
    <Navbar/>
    <ItemListContainer greeting="Bienvenido a esta página de venta de snacks y bebidas"/>
    <Footer/>
    </div>
  );
}

export default App;