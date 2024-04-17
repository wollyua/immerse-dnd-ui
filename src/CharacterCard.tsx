import "./CharacterCard.css";
import CharacteristicCard from "./CharacteristicCard";

export interface CharacterCardProps {
  name: string;
  race: string;
  chClass: string;
  level: number;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export default function CharacterCard({
  name = "Rick Sanchez",
  race = "Human",
  chClass = "Warlock",
  level = 10,
  str = 10,
  dex = 18,
  con = 14,
  int = 8,
  wis = 15,
  cha = 12,
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
