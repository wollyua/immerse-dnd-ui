import CharactersList from "./CharactersList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <CharactersList />
      </div>
    </>
  );
}

export default App;
