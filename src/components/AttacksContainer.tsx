import "./AttacksContainer.css";

interface AttackProps {
  AttackName: string;
  DiceNumber: number;
  DiceType: number;
  DamageType: string;
}

export default function AttacksContainer() {
  const attacks = [
    {
      AttackName: "Greatsword",
      DiceNumber: 2,
      DiceType: 6,
      DamageType: "Slashing",
    },
    {
      AttackName: "Longbow",
      DiceNumber: 1,
      DiceType: 8,
      DamageType: "Piercing",
    },
    {
      AttackName: "Dagger",
      DiceNumber: 1,
      DiceType: 4,
      DamageType: "Piercing",
    },
    {
      AttackName: "Fireball",
      DiceNumber: 8,
      DiceType: 6,
      DamageType: "Fire",
    },
    {
      AttackName: "Lightning Bolt",
      DiceNumber: 8,
      DiceType: 6,
      DamageType: "Lightning",
    },
  ];
  return (
    <div className="attacks-container">
      <div className="list-container">
        {attacks.map((attack, index) => (
          <Attack
            key={index}
            AttackName={attack.AttackName}
            DiceNumber={attack.DiceNumber}
            DiceType={attack.DiceType}
            DamageType={attack.DamageType}
          />
        ))}
      </div>
      <div className="attacks-header">ATTACKS & SPELLCASTING</div>
    </div>
  );
}

function Attack(props: AttackProps) {
  return (
    <div className="attack-container">
      <div className="attack-name">{props.AttackName}</div>
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
