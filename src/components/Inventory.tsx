import "./Inventory.css";

export interface InventoryProps {
  ItemName: string;
  ItemDescription: string;
}

export default function Inventory({ items }: { items: InventoryProps[] }) {
  return (
    <div className="inventory-container">
      <div className="list-container">
        {items.length === 0 ? (
          <div className="empty-inventory">No items in inventory</div>
        ) : (
          items.map((attack, index) => (
            <InventoryItem
              key={index}
              ItemName={attack.ItemName}
              ItemDescription={attack.ItemDescription}
            />
          ))
        )}
      </div>
      <div className="inventory-header">INVENTORY</div>
    </div>
  );
}

function InventoryItem(props: InventoryProps) {
  return (
    <div className="item-container">
      <div className="item-name">{props.ItemName}</div>
      <div className="item-description">
        {props.ItemDescription == null || props.ItemDescription.length === 0
          ? "-"
          : props.ItemDescription}
      </div>
    </div>
  );
}
