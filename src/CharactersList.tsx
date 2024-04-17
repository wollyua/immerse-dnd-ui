import "./CharactersList.css";
import CharacterCard, { CharacterCardProps } from "./CharacterCard";
import { useState } from "react";

const itemsPerPage = 4;

/*export class Character {
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

  constructor(
    name: string,
    race: string,
    chClass: string,
    level: number,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
  ) {
    this.name = name;
    this.race = race;
    this.chClass = chClass;
    this.level = level;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
  }
}*/

export default function CharactersList({
  items,
}: {
  items: CharacterCardProps[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="charactersList">
        {/* Render character cards */}
        {currentItems.map((item, index) => (
          <CharacterCard key={index} {...item} />
        ))}
      </div>
      {/* Render pagination buttons */}
      <div className="pagesList">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button key={pageNumber} onClick={() => paginate(pageNumber)}>
              <span className="buttonText">{pageNumber}</span>
            </button>
          )
        )}
      </div>
    </>
  );
}
