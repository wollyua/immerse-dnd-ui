import { useEffect, useState } from "react";
import "./AttacksContainer.css";
import { AttackDto, addAttack, getAttacksList } from "../api/ApiService";

export interface AttackProps {
  AttackId: string;
  AttackName: string;
  AttackRange: number;
  DiceNumber: number;
  DiceType: number;
  DamageType: string;
}

export default function AttacksContainer({
  characterId,
}: {
  characterId: string;
}) {
  const [attacks, setAttacks] = useState<AttackDto[]>([]);

  useEffect(() => {
    getAttacksList(characterId)
      .then((response) => setAttacks(response))
      .catch((error) => console.error(error));
  }, [characterId]);

  return (
    <div className="attacks-container">
      <div className="list-container">
        {true && <AddAttack characterId={characterId} />}
        {attacks.length === 0 ? (
          <div className="empty-attacks">No attacks or spells</div>
        ) : (
          attacks.map((attack, index) => (
            <Attack
              key={index}
              AttackId={attack.attackId}
              AttackName={attack.attackName}
              AttackRange={attack.attackRange}
              DiceNumber={attack.diceNumber}
              DiceType={attack.diceType}
              DamageType={attack.damageType}
            />
          ))
        )}
      </div>
      <div className="attacks-header">ATTACKS & SPELLCASTING</div>
    </div>
  );
}

function Attack(props: AttackProps) {
  const id = props.AttackId;

  return (
    <div className="attack-container">
      <div className="attack-name">{props.AttackName}</div>
      <div className="attack-range">{props.AttackRange} ft.</div>
      <div className="attack-damage">
        <b>
          {props.DiceNumber}d{props.DiceType}
        </b>
      </div>
      <div className="damage-type">
        <i>{props.DamageType}</i>
      </div>
    </div>
  );
}

export function AddAttack({ characterId }: { characterId: string }) {
  const addAttackHandler = () => {
    const attackName = document.querySelector<HTMLInputElement>(
      ".attack-name-input"
    ) as HTMLInputElement;
    const attackRange = document.querySelector<HTMLInputElement>(
      ".attack-range input"
    ) as HTMLInputElement;
    const diceNumber = document.querySelector<HTMLInputElement>(
      ".dice-number-input"
    ) as HTMLInputElement;
    const diceType = document.querySelector<HTMLInputElement>(
      ".dice-type-select"
    ) as HTMLInputElement;
    const damageType = document.querySelector<HTMLInputElement>(
      ".damage-type-select"
    ) as HTMLInputElement;

    if (attackName.value.length === 0) {
      alert("Attack name cannot be empty");
      return;
    }

    let attack: AttackDto = {} as AttackDto;
    attack.characterId = characterId;
    attack.attackName = attackName.value;
    attack.attackRange = parseInt(attackRange.value);
    attack.diceNumber = parseInt(diceNumber.value);
    attack.diceType = parseInt(diceType.value);
    attack.damageType = damageType.value;
    console.log("Adding attack:", attack);

    addAttack(attack);
  };

  return (
    <div className="add-attack-container">
      <div className="attack-name">
        <input
          className="attack-name-input"
          name="name"
          type="text"
          maxLength={16}
        />
      </div>
      <div className="range-and-damage">
        <div className="attack-range">
          <input
            className="range-input"
            name="range"
            type="number"
            min={1}
            max={500}
            defaultValue={5}
          />{" "}
          ft.
        </div>
        <div className="attack-damage">
          <input
            className="dice-number-input"
            name="dice-number"
            type="number"
            min={0}
            max={10}
            defaultValue={1}
          />
          <b> d </b>
          <select className="dice-type-select" name="dice-type">
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={12}>12</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="damage-type">
          <select className="damage-type-select" name="damage-type">
            <option value="Acid">Acid</option>
            <option value="Bludgeoning">Bludgeoning</option>
            <option value="Cold">Cold</option>
            <option value="Fire">Fire</option>
            <option value="Force">Force</option>
            <option value="Lightning">Lightning</option>
            <option value="Necrotic">Necrotic</option>
            <option value="Piercing">Piercing</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psychic</option>
            <option value="Radiant">Rariant</option>
            <option value="Slashing">Slashing</option>
            <option value="Thunder">Thunder</option>
          </select>
        </div>
      </div>
      <button className="add-attack-button" onClick={addAttackHandler}>
        Add
      </button>
    </div>
  );
}
