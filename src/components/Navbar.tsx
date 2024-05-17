import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  console.log("Navbar component rendered");
  return (
    <header>
      <div className="navElement">
        <Link to="/">Immerse D&D</Link>
      </div>
      <div className="navElement">
        <Link to="/my-characters">Characters</Link>
      </div>
    </header>
  );
}

export default Navbar;
