import CharacteristicCardLarge from "../components/AbilityCardLarge";
import AbilitySecondary, {
  ParameterBlock,
} from "../components/AbilitySecondary";
import ArmorClass from "../components/ArmorClass";
import AttacksContainer from "../components/AttacksContainer";
import DeathSaves from "../components/DeathSaves";
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
            value={props.Strength}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="DEXTERITY"
            value={props.Dexterity}
            proficiency={true}
          />
          <CharacteristicCardLarge
            ability="CONSTITUTION"
            value={props.Constitution}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="INTELLIGENCE"
            value={props.Intelligence}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="WISDOM"
            value={props.Wisdom}
            proficiency={false}
          />
          <CharacteristicCardLarge
            ability="CHARISMA"
            value={props.Charisma}
            proficiency={true}
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
            <AttacksContainer />
          </div>
        </div>
      </div>
    </>
  );
}
