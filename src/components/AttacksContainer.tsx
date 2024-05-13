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
