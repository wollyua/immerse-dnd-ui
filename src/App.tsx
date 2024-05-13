import Navbar from "./components/Navbar";
import "./App.css";
import LoginPage from "./modules/LoginPage";
import CharacterSheetPage, {
  CharacterSheetProps,
} from "./modules/CharacterSheetPage";
import CharactersListPage from "./modules/CharactersListPage";
import { CharacterCardProps } from "./components/CharacterCard";
import ProfilePage from "./modules/ProfilePage";
import { InventoryProps } from "./components/Inventory";

//test data
let testData: CharacterSheetProps = {
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
  Copper: 0,
  Silver: 0,
  Gold: 0,
  Platinum: 0,
  Languages: "Common, Infernal",
  PersonalityTraits: "I am a devil, I am a demon.",
  Ideals: "I will kill all humans.",
  Bonds: "I am bound to the demon lord Baalzebul.",
  Flaws: "I am a demon.",
  OtherTraits: "I am a demon.",
  Attacks: [
    {
      AttackName: "Greatsword",
      AttackRange: 5,
      DiceNumber: 2,
      DiceType: 6,
      DamageType: "Slashing",
    },
    {
      AttackName: "Longbow",
      AttackRange: 40,
      DiceNumber: 1,
      DiceType: 8,
      DamageType: "Piercing",
    },
    {
      AttackName: "Dagger",
      AttackRange: 20,
      DiceNumber: 1,
      DiceType: 4,
      DamageType: "Piercing",
    },
    {
      AttackName: "Fireball",
      AttackRange: 15,
      DiceNumber: 8,
      DiceType: 6,
      DamageType: "Fire",
    },
    {
      AttackName: "Lightning Bolt",
      AttackRange: 10,
      DiceNumber: 8,
      DiceType: 6,
      DamageType: "Lightning",
    },
  ],
  InventoryItems: [
    {
      ItemName: "Eldritch Blast",
      ItemDescription: "1d10 force damage",
    },
    {
      ItemName: "Hex",
      ItemDescription: "1d6 necrotic damage",
    },
    {
      ItemName: "Agonizing Blast",
      ItemDescription: "1d10 force damage",
    },
    {
      ItemName: "Thirsting Blade",
      ItemDescription: "1d8 slashing damage",
    },
    {
      ItemName: "Bread",
      ItemDescription: "",
    },
  ],
};

const charactersList: CharacterCardProps[] = [
  {
    Name: "Rick Sanchez",
    Race: "Human",
    Class: "Warlock",
    Level: 5,
    Strength: 10,
    Dexterity: 10,
    Constitution: 18,
    Intelligence: 14,
    Wisdom: 8,
    Charisma: 15,
  },
  {
    Name: "Bill Morris",
    Race: "High Elf",
    Class: "Warrior",
    Level: 4,
    Strength: 19,
    Dexterity: 15,
    Constitution: 15,
    Intelligence: 10,
    Wisdom: 8,
    Charisma: 9,
  },
  {
    Name: "Rick Sanchez",
    Race: "Human",
    Class: "Warlock",
    Level: 5,
    Strength: 10,
    Dexterity: 10,
    Constitution: 18,
    Intelligence: 14,
    Wisdom: 8,
    Charisma: 15,
  },
  {
    Name: "Rick Sanchez",
    Race: "Human",
    Class: "Warlock",
    Level: 5,
    Strength: 10,
    Dexterity: 10,
    Constitution: 18,
    Intelligence: 14,
    Wisdom: 8,
    Charisma: 15,
  },
  {
    Name: "Rick Sanchez",
    Race: "Human",
    Class: "Warlock",
    Level: 5,
    Strength: 10,
    Dexterity: 10,
    Constitution: 18,
    Intelligence: 14,
    Wisdom: 8,
    Charisma: 15,
  },
];

//end test data

//<ProfilePage />

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
