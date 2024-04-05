import ChatacteristicCard from "./CaracteristicCard";
import "./CharacterCard.css";

function ChatacterCard() {
  let name: string = "Rick Sanchez";
  let race: string = "Human";
  let chClass: string = "Warlock";
  let level: number = 10;

  let str: number = 10;
  let dex: number = 10;
  let con: number = 10;
  let int: number = 10;
  let wis: number = 10;
  let cha: number = 10;

  return (
    <div>
      <div className="summary">
        <div>Name: {name}</div>
        <div>Race: {race}</div>
        <div>Class: {chClass}</div>
        <div>Level: {level}</div>
      </div>
      <div className="cardContainer">
        <ChatacteristicCard characteristic="STR" value={str} />
        <ChatacteristicCard characteristic="DEX" value={dex} />
        <ChatacteristicCard characteristic="Con" value={con} />
        <ChatacteristicCard characteristic="INT" value={int} />
        <ChatacteristicCard characteristic="WIS" value={wis} />
        <ChatacteristicCard characteristic="CHA" value={cha} />
      </div>
    </div>
  );
}

export default ChatacterCard;
