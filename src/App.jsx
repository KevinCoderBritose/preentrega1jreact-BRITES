import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

import "./app.css";


function  App() {

  return (
    <div>
        <Navbar />
        <ItemListContainer saludo="Bienvenidos a Asal" />
    </div>
  )
}

export default App