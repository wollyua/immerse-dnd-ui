import "./HitPoints.css";

interface HitPointsProps {
  maxHitPoints: number;
  currentHitPoints: number;
  temporaryHitPoints: number;
}

export default function HitPointsCurrent(props: HitPointsProps) {
  let tempHP = props.temporaryHitPoints > 0 ? props.temporaryHitPoints : 0;
  let currentHP = props.currentHitPoints > 0 ? props.currentHitPoints : 0;
  let maxHP = props.maxHitPoints > 0 ? props.maxHitPoints : 0;

  const healHandler = () => {
    const input = document.querySelector(
      ".hit-points-input"
    ) as HTMLInputElement;
    const value = Number(input.value);
    if (value > 0) {
      console.log("heal " + value);
      currentHP += value;
    }
  };

  const damageHandler = () => {
    const input = document.querySelector(
      ".hit-points-input"
    ) as HTMLInputElement;
    const value = Number(input.value);
    if (value > 0) {
      console.log("damage " + value);
      currentHP -= value;
    }
  };

  return (
    <div className="hit-points">
      <div className="hit-points-controls">
        <button
          className="hit-points-button heal"
          type="button"
          onClick={healHandler}
        >
          HEAL
        </button>
        <input className="hit-points-input" type="number" min={0} max={200} />
        <button
          className="hit-points-button damage"
          type="button"
          onClick={damageHandler}
        >
          DAMAGE
        </button>
      </div>
      <div className="values-block">
        <div className="hit-points-value">
          <div className="hp-element">
            <span className="hp-label">CURRENT / MAX</span>
            <span className="current-hp">
              {currentHP} / {maxHP}
            </span>
          </div>
          <div className="hp-element">
            <span className="hp-label">TEMP</span>
            <span className="temp-hp">{tempHP > 0 ? `${tempHP}` : "--"} </span>
          </div>
        </div>
        <div className="hit-points-name">HIT POINTS</div>
      </div>
    </div>
  );
}

export function HitPointsTemporary(props: HitPointsProps) {
  return (
    <div className="hit-points">
      <div className="hit-points-value">
        {props.currentHitPoints} / {props.maxHitPoints}
      </div>
      <div className="hit-points-name">{"Temporary Hit Points"}</div>
    </div>
  );
}
