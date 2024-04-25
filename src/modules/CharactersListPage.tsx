import { CharacterCardProps } from "../components/CharacterCard";
import plusIcon from "../assets/plus-svgrepo-com.svg";
import CharactersList from "../components/CharactersList";
import "./CharactersListPage.css";

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

export default function CharactersListPage() {
  return (
    <>
      <div className="page-header">
        <div className="title">My Characters</div>
        <button className="new-character-button">
          <img src={plusIcon} alt="New character" />
        </button>
      </div>
      <hr className="divider" />
      <CharactersList items={charactersList} />
    </>
  );
}
