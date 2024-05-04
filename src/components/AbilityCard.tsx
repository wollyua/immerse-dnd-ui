import "./AbilityCard.css";

interface AbilityCardProps {
  ability: string;
  value: number;
}

export default function AbilityCard({ ability, value }: AbilityCardProps) {
  let modifier: number = Math.floor((value - 10) / 2);

  return (
    <div className="summaryBlock">
      <div className="typeName">{ability}</div>
      <div className="summaryModifier">
        {modifier >= 0 && "+"}
        {modifier}
      </div>
      <div className="summaryMain">{value}</div>
    </div>
  );
}
