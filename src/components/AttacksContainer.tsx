import { useEffect, useState } from "react";
import "./AttacksContainer.css";
import { AttackDto, getAttacksList } from "../api/ApiService";

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
        {true && <AddAttack />}
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

export function AddAttack() {
  return (
    <div className="add-attack-container">
      <div className="attack-name">
        <input name="name" type="text" maxLength={24} />
      </div>
      <div className="attack-range">
        <input name="range" type="number" min={1} max={500} /> ft.
      </div>
      <div className="attack-damage">
        <b>
          <input name="dice-number" type="number" min={0} max={10} /> d{" "}
          <select name="dice-type">
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={12}>12</option>
            <option value={20}>20</option>
          </select>
        </b>
      </div>
      <div className="damage-type">
        <input name="damage-type" type="number" maxLength={16} />
      </div>
    </div>
  );
}
