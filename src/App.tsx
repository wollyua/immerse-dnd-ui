import CharactersList from "./CharactersList";
import Navbar from "./Navbar";
import "./App.css";
import { CharacterCardProps } from "./CharacterCard";

function App() {
  const charactersList: CharacterCardProps[] = [
    {
      name: "Rick Sanchez",
      race: "Human",
      chClass: "Warlock",
      level: 5,
      str: 10,
      dex: 10,
      con: 18,
      int: 14,
      wis: 8,
      cha: 15,
    },
    {
      name: "Bill Morris",
      race: "High Elf",
      chClass: "Warrior",
      level: 4,
      str: 19,
      dex: 15,
      con: 15,
      int: 10,
      wis: 8,
      cha: 9,
    },
    {
      name: "Rick Sanchez",
      race: "Human",
      chClass: "Warlock",
      level: 5,
      str: 10,
      dex: 10,
      con: 18,
      int: 14,
      wis: 8,
      cha: 15,
    },
    {
      name: "Rick Sanchez",
      race: "Human",
      chClass: "Warlock",
      level: 5,
      str: 10,
      dex: 10,
      con: 18,
      int: 14,
      wis: 8,
      cha: 15,
    },
    {
      name: "Rick Sanchez",
      race: "Human",
      chClass: "Warlock",
      level: 5,
      str: 10,
      dex: 10,
      con: 18,
      int: 14,
      wis: 8,
      cha: 15,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="title">My Characters</div>
        <CharactersList items={charactersList} />
      </div>
    </>
  );
}

export default App;
