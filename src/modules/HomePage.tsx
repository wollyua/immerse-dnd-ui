import "./HomePage.css";
import AppIcon from "../assets/AppIcon.svg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

function HomePage() {
  return (
    <>
      <NavbarHome />
      <div className="content">
        <h1 className="app-header">Immerse D&D</h1>
        <h3 className="app-subheader">
          Welcome to the world of Dungeons and Dragons
        </h3>
        <img src={AppIcon} alt="Immerse D&D Logo" className="app-logo" />
        <div className="app-content">
          <Link to="/login" className="login-link">
            Log in to get started
          </Link>
        </div>
      </div>
      <footer className="footer">2023-2024 Immerse D&D</footer>
    </>
  );
}

export default HomePage;
