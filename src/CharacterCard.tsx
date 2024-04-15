import "./CharacterCard.css";
import CharacteristicCard from "./CharacteristicCard";

interface CharacterCardProps {
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

export default function CharacterCard() {
  let name: string = "Rick Sanchez";
  let race: string = "Human";
  let chClass: string = "Warlock";
  let level: number = 10;

  let str: number = 10;
  let dex: number = 18;
  let con: number = 14;
  let int: number = 8;
  let wis: number = 15;
  let cha: number = 12;

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
