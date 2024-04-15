import "./CharacteristicCard.css";

interface CharacteristicCardProps {
  characteristic: string;
  value: number;
}

export default function CharacteristicCard({
  characteristic,
  value,
}: CharacteristicCardProps) {
  let modifier: number = Math.floor((value - 10) / 2);

  return (
    <div className="summaryBlock">
      <div className="typeName">{characteristic}</div>
      <div className="summaryModifier">
        {modifier >= 0 && "+"}
        {modifier}
      </div>
      <div className="summaryMain">{value}</div>
    </div>
  );
}
