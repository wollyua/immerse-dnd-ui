import Navbar from "./components/Navbar";
import "./App.css";
import LoginPage from "./modules/LoginPage";
import CharacterSheetPage, {
  CharacteristicCardProps,
} from "./modules/CharacterSheetPage";
import CharactersListPage from "./modules/CharactersListPage";

let testData: CharacteristicCardProps = {
  Name: "Eligos",
  Race: "Baalzebul Tiefling",
  Class: "Warlock 11",
  Level: 11,
  Strength: 9,
  Dexterity: 14,
  Constitution: 14,
  Intelligence: 12,
  Wisdom: 12,
  Charisma: 20,
  Inspiration: true,
  ProficiencyBonus: 4,
  Armor: 15,
  Speed: 30,
  CurrentHP: 60,
  MaxHP: 60,
  TempHP: 0,
};

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <CharacterSheetPage {...testData} />
      </div>
      <footer className="footer">2023-2024 Immerse D&D</footer>
    </>
  );
}

export default App;
