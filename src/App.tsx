import Navbar from "./components/Navbar";
import "./App.css";
import LoginPage from "./modules/LoginPage";
import CharacterSheetPage from "./modules/CharacterSheetPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <CharacterSheetPage />
      </div>
    </>
  );
}

export default App;
