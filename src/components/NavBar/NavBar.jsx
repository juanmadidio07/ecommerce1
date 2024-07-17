import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to='/'>My Ecommerce</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/category/phone'>Phones</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/category/tablet'>Tablets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/category/laptop'>Laptops</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar