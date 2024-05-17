import "./CharacterCard.css";
import AbilityCard from "./AbilityCard";
import { useNavigate } from "react-router";

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

export default function CharacterCard({
  ID,
  Name: name,
  Race: race,
  Class: chClass,
  Level: level,
  Strength: str,
  Dexterity: dex,
  Constitution: con,
  Intelligence: int,
  Wisdom: wis,
  Charisma: cha,
}: CharacterCardProps) {
  const navigate = useNavigate();
  const onClick = () => {
    console.log(`Clicked on character with ID: ${ID}`);
    navigate(`/my-character`);
  };

  return (
    <div className="cardWrapper" onClick={onClick}>
      <div className="summary">
        <div>
          Name: <b>{name}</b>
        </div>
        <div>
          Race: <b>{race}</b>
        </div>
        <div>
          Class: <b>{chClass}</b>
        </div>
        <div>
          Level: <b>{level}</b>
        </div>
      </div>
      <div className="statContainer">
        <AbilityCard ability="STR" value={str} />
        <AbilityCard ability="DEX" value={dex} />
        <AbilityCard ability="CON" value={con} />
        <AbilityCard ability="INT" value={int} />
        <AbilityCard ability="WIS" value={wis} />
        <AbilityCard ability="CHA" value={cha} />
      </div>
    </div>
  );
}
