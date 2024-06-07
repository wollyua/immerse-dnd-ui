import { useState } from "react";
import "./HitPoints.css";
import { UpdateHpRequest, updateHP } from "../api/ApiService";

interface HitPointsProps {
  characterId: string;
  maxHitPoints: number;
  currentHitPoints: number;
  temporaryHitPoints: number;
}

export default function HitPoints(props: HitPointsProps) {
  const [inputValue, setInputValue] = useState<number>(0);

  let tempHP = props.temporaryHitPoints > 0 ? props.temporaryHitPoints : 0;
  let currentHP = props.currentHitPoints > 0 ? props.currentHitPoints : 0;
  let maxHP = props.maxHitPoints > 0 ? props.maxHitPoints : 0;

  const healHandler = async () => {
    let newCurrentHP = Math.min(currentHP + Math.abs(inputValue), maxHP);

    const hpRequest: UpdateHpRequest = {
      currentHp: newCurrentHP,
      tempHp: tempHP,
    };

    try {
      await updateHP(props.characterId, hpRequest);
      currentHP = newCurrentHP;
    } catch (error) {
      console.error("Error updating HP:", error);
      return;
    }
    console.log("Heal handler", currentHP, tempHP, props.characterId);
  };

  const damageHandler = async () => {
    let remainingDamage = Math.abs(inputValue);

    if (tempHP > 0) {
      if (remainingDamage >= tempHP) {
        remainingDamage -= tempHP;
        tempHP = 0;
      } else {
        tempHP -= remainingDamage;
        remainingDamage = 0;
      }
    }

    let newCurrentHP = Math.max(currentHP - remainingDamage, 0);

    const hpRequest: UpdateHpRequest = {
      currentHp: newCurrentHP,
      tempHp: tempHP,
    };

    try {
      await updateHP(props.characterId, hpRequest);
      currentHP = newCurrentHP;
    } catch (error) {
      console.error("Error updating HP:", error);
      return;
    }
    console.log("Damage Handler", currentHP, tempHP, props.characterId);
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
        <input
          className="hit-points-input"
          type="number"
          min={0}
          max={200}
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
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
