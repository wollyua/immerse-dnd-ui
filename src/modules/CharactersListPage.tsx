import { CharacterCardProps } from "../components/CharacterCard";
import plusIcon from "../assets/plus-svgrepo-com.svg";
import CharactersList from "../components/CharactersList";
import "./CharactersListPage.css";
import Navbar from "../components/Navbar";

export interface CharactersListPageProps {
  characters: CharacterCardProps[];
}

export default function CharactersListPage(items: CharactersListPageProps) {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="page-header">
          <div className="title">My Characters</div>
          <button className="new-character-button">
            <img src={plusIcon} alt="New character" />
          </button>
        </div>
        <hr className="divider" />
        <CharactersList items={items.characters} />
      </div>
    </>
  );
}
