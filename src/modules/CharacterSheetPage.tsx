import CharacteristicCardLarge from "../components/AbilityCardLarge";
import AbilitySecondary, {
  ParameterBlock,
} from "../components/AbilitySecondary";
import editIcon from "../assets/Edit icon.svg";
import deleteIcon from "../assets/delete-button.svg";
import closeIcon from "../assets/closeIcon.svg";
import ArmorClass from "../components/ArmorClass";
import AttacksContainer from "../components/AttacksContainer";
import DeathSaves from "../components/DeathSaves";
import HitPoints from "../components/HitPoints";
import MoneyCard from "../components/MoneyCard";
import TraitsCard from "../components/TraitsCard";
import "./CharacterSheetPage.css";
import Inventory from "../components/Inventory";
import Navbar from "../components/Navbar";
import CharacterForm from "../components/CharacterForm";
import { CharacterDto, deleteCharacter, getCharacter } from "../api/ApiService";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export interface CharacterSheetProps {
  CharacterID: string;
}

export default function CharacterSheetPage() {
  const { characterId } = useParams<{ characterId: string }>();
  const [character, setCharacter] = useState<CharacterDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  function toggle() {
    setIsEditing((isEditing) => !isEditing);
    getCharacter(characterId as string)
      .then((data) => {
        console.log("Fetched character data");
        setCharacter(data); // Updates the state
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch character data:", err);
        setError("Failed to fetch character data");
        setLoading(false);
      });
  }
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log("Deleting character with ID:", characterId);
    deleteCharacter(characterId as string);
    navigate("/my-characters");
  };

  useEffect(() => {
    getCharacter(characterId as string)
      .then((data) => {
        console.log("Fetched character data:", data);
        setCharacter(data); // Updates the state
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch character data:", err);
        setError("Failed to fetch character data");
        setLoading(false);
      });
  }, [characterId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error:", error);
    return;
  }

  let buff: CharacterDto = character as CharacterDto;

  return (
    <>
      <Navbar />
      <div className="content">
        {!isEditing && character != null && (
          <>
            <div className="character-name">{character.characterName}</div>
            <div className="character-info-summary">
              <span>{character.characterRace}</span>
              <div>
                {character.characterClass + " "}
                <span style={{ fontWeight: "700" }}>
                  {"Level " + character.characterLevel}
                </span>
              </div>
              <div className="buttons-container">
                <button className="edit-character-button">
                  <img src={editIcon} alt="Edit character" onClick={toggle} />
                </button>
                <button className="edit-character-button">
                  <img
                    src={deleteIcon}
                    alt="Delete character"
                    onClick={handleDelete}
                  />
                </button>
              </div>
            </div>
            <div className="character-info-main">
              <div className="abilities-and-skills-block">
                <AbilitySecondary
                  ability="INSPIRATION"
                  value={character.inspiration}
                />
                <AbilitySecondary
                  ability="PROFICIENCY BONUS"
                  value={character.proficiencyBonus}
                />
                <CharacteristicCardLarge
                  ability="STRENGTH"
                  value={character.strength}
                  proficiency={character.bonStr}
                />
                <CharacteristicCardLarge
                  ability="DEXTERITY"
                  value={character.dexterity}
                  proficiency={character.bonDex}
                />
                <CharacteristicCardLarge
                  ability="CONSTITUTION"
                  value={character.constitution}
                  proficiency={character.bonCon}
                />
                <CharacteristicCardLarge
                  ability="INTELLIGENCE"
                  value={character.intelligence}
                  proficiency={character.bonInt}
                />
                <CharacteristicCardLarge
                  ability="WISDOM"
                  value={character.wisdom}
                  proficiency={character.bonWis}
                />
                <CharacteristicCardLarge
                  ability="CHARISMA"
                  value={character.charisma}
                  proficiency={character.bonCha}
                />
                <AbilitySecondary
                  ability="PASSIVE WISDOM (PERCEPTION)"
                  value={Math.floor((character.wisdom - 10) / 2)}
                />
              </div>
              <div className="millde-column">
                <div className="character-info-secondary">
                  <ArmorClass
                    Armor={character.armor}
                    Dexterity={character.dexterity}
                    Bonus={0}
                  />
                  <ParameterBlock
                    ability="INITIATIVE"
                    value={Math.floor((character.dexterity - 10) / 2)}
                  />
                  <ParameterBlock ability="SPEED" value={character.speed} />
                </div>
                <div className="character-info-miscelanous">
                  <HitPoints
                    characterId={character.characterId}
                    currentHitPoints={character.currentHp}
                    maxHitPoints={character.maxHp}
                    temporaryHitPoints={character.tempHp}
                  />
                  <DeathSaves />
                  <AttacksContainer characterId={character.characterId} />
                </div>
              </div>
              <div className="right-column">
                <MoneyCard
                  Copper={character.copper}
                  Silver={character.silver}
                  Gold={character.gold}
                  Platinum={character.platinum}
                />
                <Inventory characterId={character.characterId} />
                <TraitsCard
                  Languages={character.languages}
                  PersonalityTraits={
                    character.personalityTraits
                      ? character.personalityTraits
                      : "-"
                  }
                  Ideals={character.ideals ? character.ideals : "-"}
                  Bonds={character.bonds ? character.bonds : "-"}
                  Flaws={character.flaws ? character.flaws : "-"}
                  OtherTraits={
                    character.otherTraits ? character.otherTraits : "-"
                  }
                />
              </div>
            </div>
          </>
        )}

        {isEditing && character != null && (
          <div className="edit-form">
            <div className="buttons-container">
              <button className="edit-character-button">
                <img src={closeIcon} alt="Edit character" onClick={toggle} />
              </button>
            </div>
            <div className="character-form-container">
              <CharacterForm {...buff} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
