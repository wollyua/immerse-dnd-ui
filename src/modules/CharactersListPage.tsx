import { CharacterCardProps } from "../components/CharacterCard";
import plusIcon from "../assets/plus-svgrepo-com.svg";
import CharactersList from "../components/CharactersList";
import "./CharactersListPage.css";

export default function CharactersListPage(items: CharacterCardProps[]) {
  return (
    <>
      <div className="page-header">
        <div className="title">My Characters</div>
        <button className="new-character-button">
          <img src={plusIcon} alt="New character" />
        </button>
      </div>
      <hr className="divider" />
      <CharactersList items={items} />
    </>
  );
}
