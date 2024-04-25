import "./CharacterCard.css";
import AbilityCard from "./AbilityCard";

export interface CharacterCardProps {
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
  return (
    <div className="cardWrapper">
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
