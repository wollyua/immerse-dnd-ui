import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="navElement">
        <a href="/">Immerse D&D</a>
      </div>
      <div className="navElement">
        <a href="/characters">Characters</a>
      </div>
      <div className="navElement">
        <a href="/about">About</a>
      </div>
    </header>
  );
}

export default Navbar;
