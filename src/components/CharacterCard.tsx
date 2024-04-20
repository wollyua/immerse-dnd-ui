import "./CharacterCard.css";
import CharacteristicCard from "./CharacteristicCard";

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
        <CharacteristicCard characteristic="STR" value={str} />
        <CharacteristicCard characteristic="DEX" value={dex} />
        <CharacteristicCard characteristic="CON" value={con} />
        <CharacteristicCard characteristic="INT" value={int} />
        <CharacteristicCard characteristic="WIS" value={wis} />
        <CharacteristicCard characteristic="CHA" value={cha} />
      </div>
    </div>
  );
}
