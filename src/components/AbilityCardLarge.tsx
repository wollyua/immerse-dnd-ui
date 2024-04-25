import "./AbilityCardLarge.css";
import None from "../assets/NoProfficiency.svg";
import Proficiency from "../assets/Profficiency.svg";
import Expertise from "../assets/Expertise.svg";

interface CharacteristicCardProps {
  ability: string;
  value: number;
  proficiency: boolean;
}

function proficiencyIcon(value: number) {
  let source: string;
  let title: string;
  if (value === 0) {
    source = None;
    title = "No Proficiency";
  } else if (value === 1) {
    source = Proficiency;
    title = "Proficiency";
  } else {
    source = Expertise;
    title = "Expertise";
  }
  return <img src={source} title={title} className="prof-icon" />;
}

function modifierString(modifier: number, bonus: boolean): string {
  let res: number = modifier + (bonus ? 1 : 0);
  return `${res >= 0 ? "+" : ""}${res} `;
}

export default function AbilityCardLarge({
  ability,
  value,
  proficiency,
}: CharacteristicCardProps) {
  let modifier: number = Math.floor((value - 10) / 2);

  //add proficiency parameter
  let profValue: number = 0;
  proficiency ? (profValue = 1) : (profValue = 0);

  return (
    <div className="card-wrapper">
      <div className="ability-block">
        <div className="ability-name">{ability}</div>
        <div className="ability-modifier">
          {modifier >= 0 && "+"}
          {modifier}
        </div>
        <div className="ability-main">{value}</div>
      </div>
      <div className="skills-block">
        <div className="skill">
          {proficiencyIcon(profValue)}
          {` ${modifier >= 0 ? "+" : ""}${modifier} `}Saving Throws
        </div>
        {ability === "STRENGTH" && (
          <div className="skill">
            {proficiencyIcon(profValue)}
            {` ${modifier >= 0 ? "+" : ""}${modifier} `}Athletics
          </div>
        )}
        {ability === "DEXTERITY" && (
          <>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}
              Acrobatics
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Sleight of Hand
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Stealth
            </div>
          </>
        )}
        {ability === "CONSTITUTION" && (
          <div className="skill">
            {proficiencyIcon(profValue)}
            {` ${modifier >= 0 ? "+" : ""}${modifier} `}Constitution
          </div>
        )}
        {ability === "INTELLIGENCE" && (
          <>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Arcana
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}History
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Investigation
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Nature
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Religion
            </div>
          </>
        )}
        {ability === "WISDOM" && (
          <>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Animal handling
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Insight
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Medicine
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Perception
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Survival
            </div>
          </>
        )}
        {ability === "CHARISMA" && (
          <>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Deception
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Intimidation
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Performance
            </div>
            <div className="skill">
              {proficiencyIcon(profValue)}
              {` ${modifier >= 0 ? "+" : ""}${modifier} `}Persuasion
            </div>
          </>
        )}
      </div>
    </div>
  );
}
