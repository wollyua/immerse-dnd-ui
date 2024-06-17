import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  console.log("Navbar component rendered");
  return (
    <header>
      <div className="navElement">
        <Link to="/">Immerse D&D</Link>
      </div>
    </header>
  );
}
