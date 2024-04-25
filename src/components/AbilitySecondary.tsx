import "./AbilitySecondary.css";

interface AbilitySecondaryProps {
  ability: string;
  value: boolean | number;
}

export default function AbilitySecondary(props: AbilitySecondaryProps) {
  return (
    <div className="ability-secondary">
      <div className="ability-secondary-value">
        {(props.value as number) > 0 && props.ability !== "INSPIRATION"
          ? "+"
          : ""}
        {props.value ? 1 : 0}
      </div>
      <div className="ability-secondary-name">{props.ability}</div>
    </div>
  );
}

export function ParameterBlock(props: AbilitySecondaryProps) {
  return (
    <div className="parameter-block">
      <div className="parameter-block-value">
        {(props.value as number) > 0 && props.ability !== "SPEED" ? "+" : ""}
        {props.value}
        {props.ability === "SPEED" ? " ft." : ""}
      </div>
      <div className="parameter-block-name">{props.ability}</div>
    </div>
  );
}
