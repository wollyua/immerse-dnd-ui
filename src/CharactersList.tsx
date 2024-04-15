import "./CharactersList.css";
import CharacterCard from "./CharacterCard";

export default function CharactersList() {
  return (
    <div className="charactersList">
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </div>
  );
}
