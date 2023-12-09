import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

import "./app.css";


function  App() {

  return (
    <div>
        <Navbar />
        <ItemListContainer saludo = "Bienvenido loco"/>
    </div>
  )
}

export default App