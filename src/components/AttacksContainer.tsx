import "./AttacksContainer.css";

export interface AttackProps {
  AttackName: string;
  AttackRange: number;
  DiceNumber: number;
  DiceType: number;
  DamageType: string;
}

export default function AttacksContainer({ items }: { items: AttackProps[] }) {
  return (
    <div className="attacks-container">
      <div className="list-container">
        {true && <AddAttack />}
        {items.length === 0 ? (
          <div className="empty-attacks">No attacks or spells</div>
        ) : (
          items.map((attack, index) => (
            <Attack
              key={index}
              AttackName={attack.AttackName}
              AttackRange={attack.AttackRange}
              DiceNumber={attack.DiceNumber}
              DiceType={attack.DiceType}
              DamageType={attack.DamageType}
            />
          ))
        )}
      </div>
      <div className="attacks-header">ATTACKS & SPELLCASTING</div>
    </div>
  );
}

function Attack(props: AttackProps) {
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
