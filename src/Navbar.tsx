import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="navElement">
          <a href="/">Home</a>
        </li>
        <li className="navElement">
          <a href="/characters">Characters</a>
        </li>
        <li className="navElement">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
