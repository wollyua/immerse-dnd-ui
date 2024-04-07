import "./CaracteristicCard.css";

interface CharacteristicCardProps {
  characteristic: string;
  value: number;
}

function CharacteristicCard({
  characteristic,
  value,
}: CharacteristicCardProps) {
  let modifier: number = Math.floor((value - 10) / 2);

  return (
    <div>
      <div>{characteristic}</div>
      <div>{modifier}</div>
      <div>{value}</div>
    </div>
  );
}

export default CharacteristicCard;
