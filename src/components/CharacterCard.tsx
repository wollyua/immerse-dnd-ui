import "./CharacterCard.css";
import AbilityCard from "./AbilityCard";
import { useNavigate } from "react-router";
import { CharacterPreviewDto } from "../api/ApiService";

export interface CharacterCardProps {
  ID: string;
  Name: string;
  Race: string;
  Class: string;
  Level: number;
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
}

export default function CharacterCard(character: CharacterPreviewDto) {
  const navigate = useNavigate();
  const onClick = () => {
    console.log(`Clicked on character with ID: ${character.characterId}`);
    navigate(`/my-character`);
  };

  return (
    <div className="cardWrapper" onClick={onClick}>
      <div className="summary">
        <div>
          Name: <b>{character.characterName}</b>
        </div>
        <div>
          Race: <b>{character.characterRace}</b>
        </div>
        <div>
          Class: <b>{character.characterClass}</b>
        </div>
        <div>
          Level: <b>{character.characterLevel}</b>
        </div>
      </div>
      <div className="statContainer">
        <AbilityCard ability="STR" value={character.strength} />
        <AbilityCard ability="DEX" value={character.dexterity} />
        <AbilityCard ability="CON" value={character.constitution} />
        <AbilityCard ability="INT" value={character.intelligence} />
        <AbilityCard ability="WIS" value={character.wisdom} />
        <AbilityCard ability="CHA" value={character.charisma} />
      </div>
    </div>
  );
}
