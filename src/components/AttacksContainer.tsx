import "./AttacksContainer.css";

interface AttackProps {
  Name: string;
  ATkBonus: string;
  DamageType: string;
}

export default function AttacksContainer() {
  return (
    <div className="list-container">
      <div className="list-item">Item 1</div>
      <div className="list-item">Item 2</div>
      <div className="list-item">Item 3</div>
      <div className="list-item">Item 4</div>
      <div className="list-item">Item 5</div>
    </div>
  );
}

function Attack(props: AttackProps) {
  return (
    <div className="attack-container">
      <div className="attack-name"></div>
      <div className="attack-bonus"></div>
      <div className="damage-type"></div>
    </div>
  );
}
