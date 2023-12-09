import CartWidget from "./CartWidget"
import "./Navbar.css"


const Navbar =  () => {
  return (

    <div id="navbar">
      <h1>Asal</h1>
      <ul>
        <li>
          <a href="-">Zapatillas</a>
        </li>
        <li>
          <a href="-">Medias</a>
        </li>
      </ul>
      <CartWidget />
    </div>
    
  )
    
  

}

export default Navbar