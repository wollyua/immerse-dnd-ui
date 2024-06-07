import "./Inventory.css";

export interface InventoryProps {
  ItemName: string;
  ItemDescription: string;
}

export default function Inventory({ items }: { items: InventoryProps[] }) {
  return (
    <div className="inventory-container">
      <div className="list-container">
        {true && <AddItem />}
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

export function AddItem() {
  const addItem = () => {
    const itemName = document.querySelector(
      ".item-name input"
    ) as HTMLInputElement;
    const itemDescription = document.querySelector(
      ".item-description input"
    ) as HTMLInputElement;

    if (itemName.value.length === 0) {
      alert("Item name cannot be empty");
      return;
    }

    var ItemName = itemName.value;
    var ItemDescription = itemDescription.value;
    alert("Item added successfully");

    return { ItemName, ItemDescription } as InventoryProps;
  };

  return (
    <div className="add-item-container">
      <div className="item-name">
        <input type="text" maxLength={32} />
      </div>
      <div className="item-description">
        <input type="text" maxLength={64} />
      </div>
      <button className="add-item-button" onClick={addItem}>
        Add
      </button>
    </div>
  );
}
