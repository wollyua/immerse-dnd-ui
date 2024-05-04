import "./ArmorClass.css";

interface ArmorClassProps {
  Armor: number;
  Dexterity: number;
  Bonus: number;
}

export default function ArmorClass({
  Armor,
  Dexterity,
  Bonus,
}: ArmorClassProps) {
  let dexterityModifier: number = Math.floor((Dexterity - 10) / 2);
  return (
    <div className="armor-class-wrapper">
      <div className="armor-class-block">
        <div className="armor-class-name">
          ARMOR
          <br />
          CLASS
        </div>
        <div className="armor-class-value">
          {Armor + dexterityModifier + Bonus}
        </div>
      </div>
    </div>
  );
}
