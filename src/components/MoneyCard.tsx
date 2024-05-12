import "./MoneyCard.css";

interface MoneyCardProps {
  Copper: number;
  Silver: number;
  Gold: number;
  Platinum: number;
}

export default function MoneyCard(props: MoneyCardProps) {
  return (
    <div className="money-card">
      <div className="money-container">
        <div className="money-item">
          <div className="money-item-name">Copper:</div>
          <div className="money-item-amount">{props.Copper}</div>
        </div>
        <div className="money-item">
          <div className="money-item-name">Silver:</div>
          <div className="money-item-amount">{props.Silver}</div>
        </div>
        <div className="money-item">
          <div className="money-item-name">Gold:</div>
          <div className="money-item-amount">{props.Gold}</div>
        </div>
        <div className="money-item">
          <div className="money-item-name">Platinum:</div>
          <div className="money-item-amount">{props.Platinum}</div>
        </div>
      </div>
      <div className="money-header">MONEY</div>
    </div>
  );
}
