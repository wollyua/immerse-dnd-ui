import CharacteristicCardLarge from "../components/AbilityCardLarge";
import AbilitySecondary, {
  ParameterBlock,
} from "../components/AbilitySecondary";
import ArmorClass from "../components/ArmorClass";
import HitPointsCurrent from "../components/HitPoints";
import "./CharacterSheetPage.css";

export interface CharacteristicCardProps {
  Name: string;
  Race: string;
  Class: string;
  Level: number;
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
  Inspiration: boolean;
  ProficiencyBonus: number;
  Armor: number;
  Speed: number;
  CurrentHP: number;
  MaxHP: number;
  TempHP: number;
}

export default function CharacterSheetPage(props: CharacteristicCardProps) {
  return (
    <>
      <div className="character-name">{props.Name}</div>
      <div className="character-info-summary">
        <span>{props.Race}</span>
        <div>
          {props.Class + " "}
          <span style={{ fontWeight: "700" }}>{"Level " + props.Level}</span>
        </div>
      </div>
      <div className="character-info-main">
        <div className="abilities-and-skills-block">
          <AbilitySecondary ability="INSPIRATION" value={props.Inspiration} />
          <AbilitySecondary
            ability="PROFICIENCY BONUS"
            value={props.ProficiencyBonus}
          />
          <CharacteristicCardLarge
            ability="STRENGTH"
            value={9}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="DEXTERITY"
            value={14}
            proficiency={true}
          />
          <CharacteristicCardLarge
            ability="CONSTITUTION"
            value={14}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="INTELLIGENCE"
            value={12}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="WISDOM"
            value={12}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="CHARISMA"
            value={20}
            proficiency={true}
          />
          <AbilitySecondary
            ability="PASSIVE WISDOM (PERCEPTION)"
            value={Math.floor((14 - 10) / 2)}
          />
        </div>
        <div className="character-info-miscelanous">
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
          <HitPointsCurrent
            currentHitPoints={props.CurrentHP}
            maxHitPoints={props.MaxHP}
            temporaryHitPoints={props.TempHP}
          />
        </div>
      </div>
    </>
  );
}
