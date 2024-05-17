import CharacteristicCardLarge from "../components/AbilityCardLarge";
import AbilitySecondary, {
  ParameterBlock,
} from "../components/AbilitySecondary";
import editIcon from "../assets/Edit icon.svg";
import deleteIcon from "../assets/delete-button.svg";
import closeIcon from "../assets/closeIcon.svg";
import ArmorClass from "../components/ArmorClass";
import AttacksContainer, { AttackProps } from "../components/AttacksContainer";
import DeathSaves from "../components/DeathSaves";
import HitPointsCurrent from "../components/HitPoints";
import MoneyCard from "../components/MoneyCard";
import TraitsCard from "../components/TraitsCard";
import "./CharacterSheetPage.css";
import Inventory, { InventoryProps } from "../components/Inventory";
import Navbar from "../components/Navbar";
import { useState } from "react";
import CharacterForm from "../components/CharacterForm";

export interface CharacterSheetProps {
  CharacterID: string;
  CharacterName: string;
  CharacterRace: string;
  CharacterClass: string;
  CharacterLevel: number;
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
  bonStr: boolean;
  bonDex: boolean;
  bonCon: boolean;
  bonInt: boolean;
  bonWis: boolean;
  bonCha: boolean;
  Inspiration: boolean;
  ProficiencyBonus: number;
  Armor: number;
  Speed: number;
  CurrentHP: number;
  MaxHP: number;
  TempHP: number;
  Copper: number;
  Silver: number;
  Gold: number;
  Platinum: number;
  Languages: string;
  PersonalityTraits: string;
  Ideals: string;
  Bonds: string;
  Flaws: string;
  OtherTraits: string;
  Attacks: AttackProps[];
  InventoryItems: InventoryProps[];
}

export default function CharacterSheetPage(props: CharacterSheetProps) {
  const [isEditing, setIsEditing] = useState(false);

  function toggle() {
    setIsEditing((isEditing) => !isEditing);
  }

  return (
    <>
      <Navbar />
      <div className="content">
        {!isEditing && (
          <>
            <div className="character-name">{props.CharacterName}</div>
            <div className="character-info-summary">
              <span>{props.CharacterRace}</span>
              <div>
                {props.CharacterClass + " "}
                <span style={{ fontWeight: "700" }}>
                  {"Level " + props.CharacterLevel}
                </span>
              </div>
              <div className="buttons-container">
                <button className="edit-character-button">
                  <img src={editIcon} alt="Edit character" onClick={toggle} />
                </button>
                <button className="edit-character-button">
                  <img src={deleteIcon} alt="Delete character" />
                </button>
              </div>
            </div>
            <div className="character-info-main">
              <div className="abilities-and-skills-block">
                <AbilitySecondary
                  ability="INSPIRATION"
                  value={props.Inspiration}
                />
                <AbilitySecondary
                  ability="PROFICIENCY BONUS"
                  value={props.ProficiencyBonus}
                />
                <CharacteristicCardLarge
                  ability="STRENGTH"
                  value={props.Strength}
                  proficiency={props.bonStr}
                />
                <CharacteristicCardLarge
                  ability="DEXTERITY"
                  value={props.Dexterity}
                  proficiency={props.bonDex}
                />
                <CharacteristicCardLarge
                  ability="CONSTITUTION"
                  value={props.Constitution}
                  proficiency={props.bonCon}
                />
                <CharacteristicCardLarge
                  ability="INTELLIGENCE"
                  value={props.Intelligence}
                  proficiency={props.bonInt}
                />
                <CharacteristicCardLarge
                  ability="WISDOM"
                  value={props.Wisdom}
                  proficiency={props.bonWis}
                />
                <CharacteristicCardLarge
                  ability="CHARISMA"
                  value={props.Charisma}
                  proficiency={props.bonCha}
                />
                <AbilitySecondary
                  ability="PASSIVE WISDOM (PERCEPTION)"
                  value={Math.floor((props.Wisdom - 10) / 2)}
                />
              </div>
              <div className="millde-column">
                <div className="character-info-secondary">
                  <ArmorClass
                    Armor={props.Armor}
                    Dexterity={props.Dexterity}
                    Bonus={0}
                  />
                  <ParameterBlock
                    ability="INITIATIVE"
                    value={Math.floor((props.Dexterity - 10) / 2)}
                  />
                  <ParameterBlock ability="SPEED" value={props.Speed} />
                </div>
                <div className="character-info-miscelanous">
                  <HitPointsCurrent
                    currentHitPoints={props.CurrentHP}
                    maxHitPoints={props.MaxHP}
                    temporaryHitPoints={props.TempHP}
                  />
                  <DeathSaves />
                  <AttacksContainer items={props.Attacks} />
                </div>
              </div>
              <div className="right-column">
                <MoneyCard Copper={0} Silver={0} Gold={0} Platinum={0} />
                <Inventory items={props.InventoryItems} />
                <TraitsCard
                  Languages={props.Languages}
                  PersonalityTraits={props.PersonalityTraits}
                  Ideals={props.Ideals}
                  Bonds={props.Bonds}
                  Flaws={props.Flaws}
                  OtherTraits={props.OtherTraits}
                />
              </div>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <button className="edit-character-button">
              <img src={closeIcon} alt="Edit character" onClick={toggle} />
            </button>
            <CharacterForm />
          </>
        )}
      </div>
    </>
  );
}
