import { Link } from "react-router-dom"

import "../styles/navbar.css"

function Navbar() {
  return (
    <nav class="navbar">
        <h5 className="logo"><a href="https://very-awesome-projectmanager.herokuapp.com/">Mini-Stotes</a></h5>
        <div className="nav-links">
            <Link to="/"><div className="nav-links__link">My Tasks</div></Link>
            <Link to="/about"><div className="nav-links__link">About</div></Link>
        </div>
    </nav>
  )
}

export default Navbar