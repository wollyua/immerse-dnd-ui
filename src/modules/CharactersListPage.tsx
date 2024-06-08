import { CharacterCardProps } from "../components/CharacterCard";
import plusIcon from "../assets/plus-svgrepo-com.svg";
import CharactersList from "../components/CharactersList";
import "./CharactersListPage.css";
import Navbar from "../components/Navbar";
import { CharacterPreviewDto, getPreviews } from "../api/ApiService";
import { useEffect, useState } from "react";

export interface CharactersListPageProps {
  userId: string;
  characters: CharacterCardProps[];
}

export default function CharactersListPage(items: CharactersListPageProps) {
  const [characters, setCharacters] = useState<CharacterPreviewDto[] | null>(
    null
  );

  useEffect(() => {
    getPreviews(items.userId).then((data) => {
      console.log("Fetched character data:", data);
      setCharacters(data);
    });
  }, [items.characters]);

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
        <CharactersList items={characters} />
      </div>
    </>
  );
}
